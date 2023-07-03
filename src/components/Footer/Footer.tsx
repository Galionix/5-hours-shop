import Link from "next/link";

import {
  categoriesArray,
  shopContactPhone,
  ShopItem,
  shopName,
} from "../../constants";

export const Footer = ({ product }: { product?: ShopItem }) => {
  const selectedCategory = product?.category;
  return (
    <footer className="bg-accent.hover flex flex-col items-center mt-5">
      <div
        className={`grid grid-cols-3 gap-4 px-1 items-center pt-5 pb-1  w-full max-w-2xl`}
      >
        <div></div>
        <h2 className="text-light">Categories</h2>
        <h2 className="text-light">Contact</h2>
      </div>
      <div
        className={`grid grid-cols-3 gap-4 px-1 items-center pb-5  w-full max-w-2xl`}
      >
        <h1 className=" cursor-pointer hover:text-light text-2xl font-bold">
          {shopName}
        </h1>
        <div className="flex flex-col	">
          {categoriesArray.map((category) => {
            return (
              <Link key={category} href={`/category/${category}`}>
                <div
                  className={`
                rounded
                cursor-pointer hover:text-light
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

        <a
          className="cursor-pointer hover:text-light"
          href={"tel:" + shopContactPhone}
        >
          {shopContactPhone}
        </a>
      </div>
    </footer>
  );
};
