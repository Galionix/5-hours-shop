import { Inter } from "next/font/google";
import Image from "next/image";

import { GroupDisplay } from "../components/GroupDisplay/GroupDisplay";
import { Layout } from "../components/Layout/MainLayout";
import { categories } from "../constants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main
        className={`flex flex-col items-center justify-between ${inter.className}`}
      >
        <Image
          width={1200}
          height={300}
          src={"https://picsum.photos/1200/300"}
          alt={"banner"}
          className="pb-5"
        />
        <GroupDisplay
          group={[
            categories.Electronics,
            categories.Books,
            categories.Clothing,
            categories.Shoes,
            categories.Toys,
          ]}
        />
      </main>
    </Layout>
  );
}
