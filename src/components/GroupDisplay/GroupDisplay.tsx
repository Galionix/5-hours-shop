import { Category, shopItems } from "../../constants";
import { Product } from "./Product";

export const GroupDisplay = ({ group }: { group: Category[] }) => {
  const filteredProducts = shopItems.filter((product) => {
    return group.includes(product.category);
  });

  return (
    <div className="grid grid-cols-4 gap-4 px-5">
      {filteredProducts.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};
