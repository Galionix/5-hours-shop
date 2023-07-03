import Link from "next/link";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";

import { categoriesArray, ShopItem, shopName } from "../../constants";
import { useCartStore } from "../../store/store";
import { Badge } from "../Badge/Badge";

export const Header = ({ product }: { product?: ShopItem }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return isMobile ? (
    <HeaderMobile product={product} />
  ) : (
    <HeaderDesktop product={product} />
  );
};

const HeaderMobile = ({ product }: { product?: ShopItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalQuantity } = useCartStore();
  const totalQuantity = getTotalQuantity();

  if (isMenuOpen) {
    return <MobileMenu setIsMenuOpen={setIsMenuOpen} product={product} />;
  }
  return (
    <header className="py-2 top-0 sticky z-10 bg-white flex items-center h-20">
      <button
        onClick={() => setIsMenuOpen(true)}
        className="ml-2 p-5 bg-accent rounded-lg absolute"
      >
        <GiHamburgerMenu></GiHamburgerMenu>
      </button>
      <div className="w-full flex justify-center items-center">
        <Link href="/">
          <h1>{shopName}</h1>
        </Link>
      </div>
      <Link href="/cart">
        <div
          className="text-2xl p-2 pr-5
            rounded
            cursor-pointer hover:bg-gray-200
            transition duration-300 ease-in-out
            "
        >
          <Badge count={totalQuantity}>
            <AiOutlineShoppingCart />
          </Badge>
        </div>
      </Link>
    </header>
  );
};

const MobileMenu = ({
  setIsMenuOpen,
  product,
}: {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  product?: ShopItem;
}) => {
  const { getTotalQuantity } = useCartStore();
  const totalQuantity = getTotalQuantity();
  const selectedCategory = product?.category;

  return (
    <div className="flex flex-col items-center  h-screen w-screen bg-white">
      <div className="flex  w-full justify-between items-center">
        <button
          className="m-2 p-5 bg-accent rounded-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          <GiHamburgerMenu></GiHamburgerMenu>
        </button>
        <div className="w-full flex justify-center items-center">
          <Link href="/">
            <h1>{shopName}</h1>
          </Link>
        </div>
        <Link href="/cart">
          <div
            className="text-2xl p-2 pr-5
            rounded
            cursor-pointer hover:bg-gray-200
            transition duration-300 ease-in-out
            "
          >
            <Badge count={totalQuantity}>
              <AiOutlineShoppingCart />
            </Badge>
          </div>
        </Link>
      </div>

      <div className="flex flex-col justify-evenly items-center w-full max-w-2xl	gap-6 mt-2">
        {categoriesArray.map((category) => {
          return (
            <Link key={category} href={`/category/${category}`}>
              <div
                className={`text-2xl
              rounded
              px-2
              cursor-pointer hover:bg-gray-200
              transition duration-300 ease-in-out
                ${
                  selectedCategory !== undefined &&
                  selectedCategory === category
                    ? "text-accent"
                    : "text-black"
                }
              `}
              >
                {category}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="w-full flex justify-end items-center"></div>
    </div>
  );
};

const HeaderDesktop = ({ product }: { product?: ShopItem }) => {
  const { getTotalQuantity } = useCartStore();
  const totalQuantity = getTotalQuantity();
  const selectedCategory = product?.category;

  return (
    <header className="flex items-center justify-center px-2">
      <Link href="/">
        <h1>{shopName}</h1>
      </Link>

      <div className="flex justify-evenly items-center h-16 w-full max-w-2xl	">
        {categoriesArray.map((category) => {
          return (
            <Link key={category} href={`/category/${category}`}>
              <div
                className={`text-2xl
              rounded
              px-2
              cursor-pointer hover:bg-gray-200
              transition duration-300 ease-in-out
                ${
                  selectedCategory !== undefined &&
                  selectedCategory === category
                    ? "text-accent"
                    : "text-black"
                }
              `}
              >
                {category}
              </div>
            </Link>
          );
        })}
      </div>
      <Link href="/cart">
        <div
          className="text-2xl p-2
        rounded
        cursor-pointer hover:bg-gray-200
        transition duration-300 ease-in-out
        "
        >
          <Badge count={totalQuantity}>
            <AiOutlineShoppingCart />
          </Badge>
        </div>
      </Link>
    </header>
  );
};
