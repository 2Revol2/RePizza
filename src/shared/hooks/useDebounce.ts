import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
  const [debounceValue, SetDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      SetDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceValue;
};
