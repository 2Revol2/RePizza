import { useEffect, useState } from "react";
import { useFiltersStore } from "../store/filtersStore";
import qs from "qs";
import { useRouter } from "next/navigation";
export const useFiltersLogic = () => {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { pizzaType, size, prices, ingredients, resetFilters } =
    useFiltersStore();
  useEffect(() => {
    const query = qs.stringify(
      {
        ...prices,
        size: size,
        ingredients: ingredients,
        pizzaType: pizzaType,
      },
      {
        arrayFormat: "comma",
      }
    );

    router.push(`?${query}`, {
      scroll: false,
    });
  }, [pizzaType, size, prices, ingredients]);

  return {
    showAll,
    searchValue,
    setShowAll,
    setSearchValue,
    resetFilters,
    pizzaType,
    size,
    prices,
    ingredients,
  };
};
