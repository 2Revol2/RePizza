import { ReactNode } from "react";
import s from "./CheckoutFrom.module.scss";
import { Flex } from "antd";
import { Title } from "@/shared/ui/Title/Title";

type CheckoutFromProps = {
  title?: string;
  children?: ReactNode;
  endAdornment?: ReactNode;
};
export const CheckoutFrom = ({
  title,
  children,
  endAdornment,
}: CheckoutFromProps) => {
  return (
    <div className={s.wrapper}>
      {title && (
        <Flex className={s.topInfo}>
          <Title Level="h5" size="md">
            {title}
          </Title>
          {endAdornment}
        </Flex>
      )}
      <div className={s.bottomInfo}>{children}</div>
    </div>
  );
};
