export const shopName = "My Shop";

export const shopContactPhone = "+380 12 345 67 89";
export const currency = "UAH";
export const shopDescription = "This is my shop";
export const enum categories {
  Electronics = "Electronics",
  Clothing = "Clothing",
  Shoes = "Shoes",
  Books = "Books",
  Toys = "Toys",
}

export type Category = keyof typeof categories;
// @ts-ignore
export const categoriesArray: Category[] =
  // @ts-ignore
  Object.keys(categories).filter((v) => isNaN(Number(v)));

export type ShopItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  bigImage: string;
};

export const shopItems: ShopItem[] = [
  {
    id: 1,
    name: "Item 1",
    description: "This is item 1",
    price: 100,
    category: "Electronics",
    image: "https://picsum.photos/id/123/200/300",
    bigImage: "https://picsum.photos/id/123/600/900",
  },
  {
    id: 2,
    name: "Item 2",
    description: "This is item 2",
    price: 200,
    category: "Clothing",
    image: "https://picsum.photos/id/124/200/300",
    bigImage: "https://picsum.photos/id/124/600/900",
  },
  {
    id: 3,
    name: "Item 3",
    description: "This is item 3",
    price: 300,
    category: "Shoes",
    image: "https://picsum.photos/id/125/200/300",
    bigImage: "https://picsum.photos/id/125/600/900",
  },
  {
    id: 4,
    name: "Item 4",
    description: "This is item 4",
    price: 400,
    category: "Books",
    image: "https://picsum.photos/id/126/200/300",
    bigImage: "https://picsum.photos/id/126/600/900",
  },
  {
    id: 5,
    name: "Item 5",
    description: "This is item 5",
    price: 500,
    category: "Toys",
    image: "https://picsum.photos/id/127/200/300",
    bigImage: "https://picsum.photos/id/127/600/900",
  },
  {
    id: 6,
    name: "Item 6",
    description: "This is item 6",
    price: 600,
    category: "Electronics",
    image: "https://picsum.photos/id/128/200/300",
    bigImage: "https://picsum.photos/id/128/600/900",
  },
  {
    id: 7,
    name: "Item 7",
    description: "This is item 7",
    price: 700,
    category: "Clothing",
    image: "https://picsum.photos/id/129/200/300",
    bigImage: "https://picsum.photos/id/129/600/900",
  },
  {
    id: 8,
    name: "Item 8",
    description: "This is item 8",
    price: 800,
    category: "Shoes",
    image: "https://picsum.photos/id/130/200/300",
    bigImage: "https://picsum.photos/id/130/600/900",
  },
  {
    id: 9,
    name: "Item 9",
    description: "This is item 9",
    price: 900,
    category: "Books",
    image: "https://picsum.photos/id/131/200/300",
    bigImage: "https://picsum.photos/id/131/600/900",
  },
  {
    id: 10,

    name: "Item 10",
    description: "This is item 10",
    price: 1000,
    category: "Toys",

    image: "https://picsum.photos/id/132/200/300",
    bigImage: "https://picsum.photos/id/132/600/900",
  },
  {
    id: 11,
    name: "Item 11",
    description: "This is item 11",
    price: 1100,
    category: "Electronics",
    image: "https://picsum.photos/id/133/200/300",
    bigImage: "https://picsum.photos/id/133/600/900",
  },
  {
    id: 12,

    name: "Item 12",
    description: "This is item 12",
    price: 1200,
    category: "Clothing",

    image: "https://picsum.photos/id/134/200/300",
    bigImage: "https://picsum.photos/id/134/600/900",
  },
];
