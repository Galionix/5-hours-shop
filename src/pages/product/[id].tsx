import Image from "next/image";
import { useRouter } from "next/router";
import { FaTrash } from "react-icons/fa";

import { Layout } from "../../components/Layout/MainLayout";
import { currency, shopItems } from "../../constants";
import { useCartStore } from "../../store/store";

const ProductPage = () => {
  const { getQuantity, addToCart, removeFromCart, removeAllFromCart } =
    useCartStore();
  const router = useRouter();

  const { id } = router.query;

  const productId: number = parseInt(id as string);

  const product = shopItems.find((product) => product.id === productId);

  if (!product) {
    return (
      <Layout>
        <div>Product not found</div>
      </Layout>
    );
  }

  const quantity = getQuantity(product);

  return (
    <Layout product={product}>
      <div className="flex justify-between px-2 gap-2 w-full">
        <div className="w-1/2 flex flex-col gap-4 items-center">
          <Image
            className="rounded"
            width={400}
            height={600}
            src={product.bigImage}
            alt={product.name}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h1
            className="
                text-3xl font-bold"
          >
            {product.name}
          </h1>
          <h2
            className="
                text-2xl font-bold"
          >
            Item description:
          </h2>
          <p>{product.description}</p>
          <h3
            className="
                              text-xl font-bold"
          >
            Price
          </h3>
          <p>
            {product.price} {currency}
          </p>
          <span>Add to cart</span>
          <input
            className="bg-gray-100 border-2 border-gray-300 rounded w-10"
            type="number"
            name=""
            id=""
            value={quantity}
            onChange={(e) => {
              if (
                "inputType" in e.nativeEvent &&
                e.nativeEvent.inputType === "insertText"
              ) {
                return;
              }
              if (e.target.value === "") {
                return;
              }

              const newQuantity = parseInt(e.target.value);

              if (newQuantity < 0) {
                return;
              }
              if (newQuantity > quantity) {
                addToCart(product);
              }

              if (newQuantity < quantity) {
                removeFromCart(product);
              }
            }}
          />
          <button
            onClick={() => removeAllFromCart(product)}
            className="flex items-center gap-2 text-red"
          >
            <span>Remove all</span>
            <span>
              <FaTrash />
            </span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
