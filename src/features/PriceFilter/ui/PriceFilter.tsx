import { PriceInput } from "@/shared/ui/PriceInput/PriceInput";
import { Flex, Slider } from "antd";
import { useState } from "react";

type PriceProps = {
  priceFrom: number;
  priceTo: number;
};

export const PriceFilter = () => {
  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const onChangePrice = (name: keyof PriceProps, value: number) => {
    setPrices({ ...prices, [name]: value });
  };
  return (
    <>
      <Flex style={{ marginTop: 15 }} gap={15}>
        <PriceInput
          min={0}
          max={1000}
          placeholder="0"
          onChange={(e) => onChangePrice("priceFrom", Number(e.target.value))}
          value={String(prices.priceFrom)}
        />
        <PriceInput
          min={100}
          max={1000}
          placeholder="1000"
          onChange={(e) => onChangePrice("priceTo", Number(e.target.value))}
          value={String(prices.priceTo)}
        />
      </Flex>
      <Slider
        range
        defaultValue={[0, 1000]}
        min={0}
        max={1000}
        step={10}
        value={[prices.priceFrom, prices.priceTo]}
        onChange={([priceFrom, priceTo]) => setPrices({ priceFrom, priceTo })}
      />
    </>
  );
};
