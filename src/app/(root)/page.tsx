import Container from "@/shared/ui/Container/Container";
import { Title } from "@/shared/ui/Title/Title";
import { Topbar } from "@/widgets/Topbar";
import { Filters } from "@/widgets/Filters";
import { Flex } from "antd";
import { ProductList } from "@/widgets/ProductList";
import { productFilters } from "@/shared/types/productFilters";
import { findProductByFilters } from "@/shared/lib/findProductByFilters";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<productFilters>;
}) {
  const searchParamsValue = await searchParams;

  const categories = await findProductByFilters(searchParamsValue);

  return (
    <>
      <Container>
        <div style={{ marginTop: 40 }}>
          <Title size="lg" Level="h3">
            Все пиццы
          </Title>
        </div>
      </Container>
      <Topbar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />
      <Container>
        <Flex style={{ marginTop: 48 }} gap={60}>
          {/* фильтры */}
          <div style={{ width: 250 }}>
            <Filters />
          </div>
          {/* товары */}
          <div style={{ flex: 1 }}>
            <Flex vertical gap={64}>
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      products={category.products}
                    />
                  )
              )}
            </Flex>
          </div>
        </Flex>
      </Container>
    </>
  );
}
