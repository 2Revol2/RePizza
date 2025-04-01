import Image from "next/image";
import Container from "../../../shared/ui/Container/Container";
import { Flex } from "antd";
import s from "./Header.module.scss";
import { Search } from "@/features/Search";
import Link from "next/link";
import { CartButton } from "@/features/CartButton";
import Button from "@/shared/ui/Button/Button";
import { User } from "lucide-react";

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
          <Button buttonType="outline">
            <User size={16} />
            Войти
          </Button>
          <CartButton />
        </Flex>
      </Container>
    </header>
  );
};
