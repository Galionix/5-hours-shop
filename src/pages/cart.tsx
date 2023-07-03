import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

import { Layout } from "../components/Layout/MainLayout";
import { currency, shopItems } from "../constants";
import { useCartStore } from "../store/store";

const CartPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const rowDesktopClassName =
    "px-6 grid grid-cols-7 gap-4 items-center w-full max-w-5xl";
  const rowMobileClassName =
    "px-6 grid grid-cols-5 gap-4 items-center w-full max-w-5xl";
  const { items, addToCart, removeFromCart, removeAllFromCart } =
    useCartStore();

  const itemsWithQuantity = items
    .map((item) => {
      const product = shopItems.find((product) => product.id === item.itemId);
      return {
        quantity: item.quantity,
        product,
      };
    })
    .filter((item) => item.product && item.quantity > 0);

  if (itemsWithQuantity.length === 0) {
    return (
      <Layout>
        <main
          className="
                flex flex-col items-center justify-center"
        >
          <div>Your cart is empty</div>
          <Link href="/">
            <div>Go shopping</div>
          </Link>
        </main>
      </Layout>
    );
  }
  return (
    <Layout>
      <div
        className="
                flex flex-col gap-4  items-center"
      >
        <Image
          width={1200}
          height={300}
          src={"https://picsum.photos/1200/300"}
          alt={"banner"}
          className="pb-5"
        />
        <div
          className={
            !isMobile
              ? rowDesktopClassName + " text-accent.hover"
              : rowMobileClassName + " text-accent.hover"
          }
        >
          <div></div>
          <div>Name</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total Price</div>
        </div>
        {itemsWithQuantity.map((item) => {
          if (!item.product) {
            return null;
          }
          return (
            <div
              className={!isMobile ? rowDesktopClassName : rowMobileClassName}
              key={item.product.id}
            >
              <Link href={`/product/${item.product.id}`}>
                <Image
                  width={50}
                  height={50}
                  src={item.product.image}
                  alt={item.product.name}
                ></Image>
              </Link>
              <Link href={`/product/${item.product.id}`}>
                <div>{item.product.name}</div>
              </Link>
              <div>
                {item.product.price} {` ${currency}`}
              </div>
              <div>{item.quantity}</div>
              <div>
                {item.product.price * item.quantity}
                {` ${currency}`}
              </div>
              {!isMobile && (
                <>
                  <div
                    className="
                    flex items-center gap-2"
                  >
                    <button
                      className="text-light px-3 py-1 bg-accent rounded hover:bg-accent.hover"
                      onClick={() => addToCart(item.product)}
                    >
                      +
                    </button>
                    <button
                      className="text-light px-3 py-1 bg-accent rounded hover:bg-accent.hover"
                      onClick={() => removeFromCart(item.product)}
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => removeAllFromCart(item.product)}
                    className="flex items-center justify-center gap-2 text-red"
                  >
                    <FaTrash />
                  </button>
                </>
              )}
            </div>
          );
        })}
        <div>
          <div
            className="
                    text-2xl"
          >
            Total:{" "}
            {itemsWithQuantity.reduce((acc, item) => {
              const price = item.product?.price || 0;
              return acc + price * item.quantity;
            }, 0)}
            {` ${currency}`}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
