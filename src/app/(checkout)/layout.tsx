import Container from "@/shared/ui/Container/Container";
import { Header } from "@/widgets/Header";


export const metadata = {
  title: "RePizza",
  description: "Placing an order",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="checkout__page">
      <Container>
        <Header showCartButton={false} showSearch={false} />
        {children}
      </Container>
    </div>
  );
}
