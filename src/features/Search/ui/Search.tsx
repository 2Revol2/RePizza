"use client";

import { SearchIcon } from "lucide-react";
import s from "./Search.module.scss";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import classNames from "classnames";
import { Flex } from "antd";
import Link from "next/link";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { SearchApi } from "@/shared/api/search/search";
import { useDebounce } from "@/shared/hooks/useDebounce";

export const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 250)

  const { data } = useQuery({
    queryKey: ["search", debouncedSearchValue],
    queryFn: () => SearchApi(debouncedSearchValue),
    placeholderData: keepPreviousData,
  });

  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsFocus(false);
  });

  return (
    <>
      {isFocus && <div className={s.shadow}></div>}

      <div ref={ref} className={s.wrapper}>
        <SearchIcon size={16} className={s.icon} />
        <input
          value={searchValue}
          onFocus={() => setIsFocus(true)}
          type="text"
          placeholder="Поиск..."
          className={s.input}
          onChange={(e) => setSearchValue(e.target.value)}
        />

       {Array.isArray(data) && data.length > 0 && <div className={classNames(s.popup, isFocus && s.openPopup)}>
          {data.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`}>
              <Flex className={s.info} align="center" gap={15}>
                <img
                  width={35}
                  height={35}
                  src={item.imageUrl}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </Flex>
            </Link>
          ))}
        </div>}
      </div>
    </>
  );
};
