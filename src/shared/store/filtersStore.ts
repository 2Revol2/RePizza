import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  pizzaType: number[];
  size: number[];
  ingredients: number[];
  prices: { priceFrom?: number; priceTo?: number };
  setFilters: (filters: Partial<State>) => void;
  resetFilters: () => void;
};

export const useFiltersStore = create<State>()(
  persist(
    (set) => ({
      pizzaType: [],
      size: [],
      ingredients: [],
      prices: {
        priceFrom: undefined,
        priceTo: undefined,
      },
      setFilters: (filters) =>
        set((state) => ({
          ...state,
          ...filters,
        })),
      resetFilters: () => {
        set({
          pizzaType: [],
          size: [],
          ingredients: [],
          prices: {
            priceFrom: undefined,
            priceTo: undefined,
          },
        });
      },
    }),
    { name: "filters" }
  )
);
