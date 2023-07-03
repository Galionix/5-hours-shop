import { ShopItem } from "../../constants";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({
  children,
  product,
}: {
  children: React.ReactNode;
  product?: ShopItem;
}) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header product={product} />
      <main className="flex flex-col flex-grow">{children}</main>
      <Footer product={product} />
    </div>
  );
};
