import { create } from "zustand";

type State = {
  doughType: number[];
  size: number[];
  ingredients: number[];
  prices: { priceFrom: number; priceTo: number };
  setFilters: (filters: Partial<State>) => void;
};

export const useFiltersStore = create<State>()((set) => ({
  doughType: [],
  size: [],
  ingredients: [],
  prices: {
    priceFrom: 0,
    priceTo: 1000,
  },
  setFilters: (filters) =>
    set((state) => ({
      ...state,
      ...filters,
    })),
}));
