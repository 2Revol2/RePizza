import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  doughType: number[];
  size: number[];
  ingredients: number[];
  prices: { priceFrom?: number; priceTo?: number };
  setFilters: (filters: Partial<State>) => void;
  resetFilters: () => void;
};

export const useFiltersStore = create<State>()(
  persist(
    (set) => ({
      doughType: [],
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
          doughType: [],
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
