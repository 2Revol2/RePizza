import { Title } from "@/shared/ui/Title/Title";
import s from "./checkoutPage.module.scss";
import { CheckoutFrom } from "@/widgets/CheckoutFrom";
import { Flex } from "antd";
import { Input } from "@/shared/ui/Input/Input";
import { Textarea } from "@/shared/ui/Textarea/Textarea";

export default async function page() {
  return (
    <div className={s.checkoutPage}>
      <Title className={s.title} size="xl" Level="h3">
        Оформление заказа
      </Title>
      <Flex gap={40}>
        {/* левая часть */}
        <Flex vertical gap={40} flex={1}>
          <CheckoutFrom title="1. Корзина ">
            <div>123</div>
          </CheckoutFrom>
          <CheckoutFrom title="2. Персональная информация">
            <div className={s.personalInfo}>
              <Input placeholder="Имя" />
              <Input placeholder="Фамилия" />
              <Input placeholder="Почта" />
              <Input placeholder="Номер" />
            </div>
          </CheckoutFrom>
          <CheckoutFrom title="3. Адрес доставки">
            <Flex vertical gap={20}>
              <Input placeholder="Введите адрес" />
              <Textarea placeholder="Укажите тут дополнительную информацию для курьера"/>
            </Flex>
          </CheckoutFrom>
        </Flex>
        {/* правая часть */}
        <div style={{ width: 340 }}>123</div>
      </Flex>
    </div>
  );
}
