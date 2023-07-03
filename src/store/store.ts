import { create } from "zustand";
import { persist } from "zustand/middleware";

import { ShopItem } from "../constants";

interface CartState {
  items: {
    itemId: number;
    quantity: number;
  }[];
  addToCart: (by: ShopItem | undefined) => void;
  removeFromCart: (by: ShopItem | undefined) => void;
  removeAllFromCart: (by: ShopItem | undefined) => void;
  getQuantity: (by: ShopItem | undefined) => number;
  getTotalQuantity: () => number;
}
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (item) => {
        if (!item) {
          return;
        }
        const index = get().items.findIndex((i) => i.itemId === item.id);
        if (index === -1) {
          set((state) => ({
            items: [...state.items, { itemId: item.id, quantity: 1 }],
          }));
        } else {
          set((state) => ({
            items: [
              ...state.items.slice(0, index),
              {
                itemId: item.id,
                quantity: state.items[index].quantity + 1,
              },
              ...state.items.slice(index + 1),
            ],
          }));
        }
      },
      removeFromCart: (item) => {
        if (!item) {
          return;
        }
        const index = get().items.findIndex((i) => i.itemId === item.id);
        if (index === -1) {
          return;
        } else {
          set((state) => ({
            items: [
              ...state.items.slice(0, index),
              {
                itemId: item.id,
                quantity: state.items[index].quantity - 1,
              },
              ...state.items.slice(index + 1),
            ],
          }));
        }
      },
      getQuantity: (item) => {
        if (!item) {
          return 0;
        }
        const index = get().items.findIndex((i) => i.itemId === item.id);
        if (index === -1) {
          return 0;
        } else {
          return get().items[index].quantity;
        }
      },
      getTotalQuantity: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },
      removeAllFromCart: (item) => {
        if (!item) {
          return;
        }
        const index = get().items.findIndex((i) => i.itemId === item.id);
        if (index === -1) {
          return;
        } else {
          set((state) => ({
            items: [
              ...state.items.slice(0, index),
              {
                itemId: item.id,
                quantity: 0,
              },
              ...state.items.slice(index + 1),
            ],
          }));
        }
      },
    }),
    {
      name: "cart-storage", // name of the item in the storage (must be unique)
      //   storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
