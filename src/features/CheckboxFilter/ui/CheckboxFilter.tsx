import { Checkbox, Flex, GetProp } from "antd";

type CheckboxFilterProps = {
  items: { value: number; text: string }[];
  name: string
};

export const CheckboxFilter = ({ items, name }: CheckboxFilterProps) => {
  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log(`${name}`, checkedValues);
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
