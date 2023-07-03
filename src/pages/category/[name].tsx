import { useRouter } from "next/router";

import { GroupDisplay } from "../../components/GroupDisplay/GroupDisplay";
import { Layout } from "../../components/Layout/MainLayout";
import { categoriesArray, Category, ShopItem } from "../../constants";

const CategoryPage = () => {
  const router = useRouter();
  const { name } = router.query;

  if (!categoriesArray.includes(name as Category)) {
    return (
      <Layout>
        <main className={`flex flex-col items-center justify-between h-full`}>
          <div>Category not found</div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout
      product={
        {
          category: name,
        } as ShopItem
      }
    >
      <main>
        <GroupDisplay group={[name as Category]}></GroupDisplay>
      </main>
    </Layout>
  );
};

export default CategoryPage;
