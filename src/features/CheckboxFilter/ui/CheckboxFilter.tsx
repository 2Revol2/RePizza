import { useFiltersStore } from "@/shared/store/filtersStore";
import { Checkbox, Flex, GetProp } from "antd";

type CheckboxFilterProps = {
  items: { value: number; text: string }[];
  type: "size" | "ingredients" | "doughType";
};

export const CheckboxFilter = ({ items, type }: CheckboxFilterProps) => {
  const setFilters = useFiltersStore((state) => state.setFilters);

  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    setFilters({ [type]: checkedValues });
  };
  return (
    <Flex style={{ marginTop: 10 }} gap={10} vertical>
      <Checkbox.Group onChange={onChange}>
        <Flex vertical gap={10}>
          {items.map((item) => (
            <Checkbox key={item.value} value={item.value}>
              {item.text}
            </Checkbox>
          ))}
        </Flex>
      </Checkbox.Group>
    </Flex>
  );
};
