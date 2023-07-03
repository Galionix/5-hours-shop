import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { currency, ShopItem } from "../../constants";
import { useCartStore } from "../../store/store";

export const Product = ({ product }: { product: ShopItem }) => {
  const { addToCart } = useCartStore();
  return (
    <div
      className="
                flex flex-col items-center justify-center"
    >
      <div className="overflow-hidden rounded">
        <Link href={`/product/${product.id}`}>
          <Image
            width={200}
            height={300}
            src={product.image}
            alt={product.name}
            className="
          cursor-pointer
          hover:scale-150
          transition duration-300 ease-in-out
          "
          />
        </Link>
      </div>
      <div className="hover:text-accent text-xl">
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </div>
      <div>
        <span>{product.price}</span> {currency}
      </div>

      <button
        onClick={() => addToCart(product)}
        className="flex items-center gap-2 bg-accent px-2 text-light hover:text-accent.hover"
      >
        <span>Add to cart</span>
        <AiOutlineShoppingCart />
      </button>
    </div>
  );
};
