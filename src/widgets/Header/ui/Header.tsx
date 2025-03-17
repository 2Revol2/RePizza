import Image from "next/image";
import Container from "../../../shared/ui/Container/Container";
import { Flex } from "antd";
import s from "./Header.module.scss";
import Button from "@/shared/ui/Button/Button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { Search } from "@/features/Search";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.container}>
        {/* Левая часть */}
        <Link href={"/"} legacyBehavior>
          <Flex style={{ cursor: "pointer" }} align="center" gap={15}>
            <Image src={"/logo.svg"} width={35} height={35} alt="logo" />
            <div>
              <h1 className={s.name}>RePizza</h1>
              <p className={s.description}>вкусней уже некуда</p>
            </div>
          </Flex>
        </Link>
        {/* Поиск */}
        <Flex flex={1}>
          <Search />
        </Flex>
        {/* Правая часть */}
        <Flex align="center" gap={"12px"}>
          <Button className={s.button} buttonType="login">
            <User size={16} />
            Войти
          </Button>
          <div>
            <Button className={s.button}>
              <b>520 ₽</b>
              <span className={s.divider} />
              <Flex className={s.cart} align="center" gap={8}>
                <ShoppingCart strokeWidth={2} height={20} width={20} />
                <b>3</b>
              </Flex>
              <ArrowRight width={20} className={s.arrowRight} />
            </Button>
          </div>
        </Flex>
      </Container>
    </header>
  );
};
