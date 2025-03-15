import Container from "@/shared/ui/Container/Container";
import { Title } from "@/shared/ui/Title/Title";
import { Topbar } from "@/widgets/Topbar";
import { Filters } from "@/widgets/Filters";
import { Flex } from "antd";
import { ProductList } from "@/widgets/ProductList";

export default function Home() {
  return (
    <>
      <Container>
        <div style={{marginTop: 40}}>
          <Title size="lg" Level="h3">
            Все пиццы
          </Title>
        </div>
      </Container>
      <Topbar />
      <Container>
        <Flex style={{ marginTop: 48 }} gap={60}>
          {/* фильтры */}
          <div style={{ width: 250 }}>
            <Filters />
          </div>
          {/* товары */}
          <div style={{ flex: 1 }}>
            <Flex vertical gap={64}>
              <ProductList
                title="Пиццы"
                categoryId={1}
                products={[
                  {
                    name: "Чилл Грилл ",
                    id: 1,
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif",
                    desc: "Цыпленок, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо",
                    items: [{ price: 500 }],
                  },
                  {
                    name: "Чилл Грилл ",
                    id: 2,
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif",
                    desc: "Цыпленок, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо",
                    items: [{ price: 500 }],
                  },
                  {
                    name: "Чилл Грилл ",
                    id: 3,
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif",
                    desc: "Цыпленок, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо",
                    items: [{ price: 500 }],
                  },
                  {
                    name: "Чилл Грилл ",
                    id: 4,
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif",
                    desc: "Цыпленок, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо",
                    items: [{ price: 500 }],
                  },
                  {
                    name: "Чилл Грилл ",
                    id: 5,
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif",
                    desc: "Цыпленок, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо",
                    items: [{ price: 500 }],
                  },
                ]}
              />
              <ProductList
                title="Комбо"
                categoryId={2}
                products={[
                  {
                    name: "Додо Бокс",
                    id: 1,
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11ef7a3e8180cb1aadc5b1b9860df0a2.avif",
                    desc: "Набор юного космонавта, который легко настроить по вкусу ребенка: две закуски и напиток на выбор. В каждом комбо игрушка, а в нашем приложении игра-компаньон",
                    items: [{ price: 400 }],
                  },
                  {
                    name: "Додо Бокс",
                    id: 2,
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11ef7a3e8180cb1aadc5b1b9860df0a2.avif",
                    desc: "Набор юного космонавта, который легко настроить по вкусу ребенка: две закуски и напиток на выбор. В каждом комбо игрушка, а в нашем приложении игра-компаньон",
                    items: [{ price: 400 }],
                  },
                  {
                    name: "Додо Бокс",
                    id: 3,
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11ef7a3e8180cb1aadc5b1b9860df0a2.avif",
                    desc: "Набор юного космонавта, который легко настроить по вкусу ребенка: две закуски и напиток на выбор. В каждом комбо игрушка, а в нашем приложении игра-компаньон",
                    items: [{ price: 400 }],
                  },
                  {
                    name: "Додо Бокс",
                    id: 4,
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11ef7a3e8180cb1aadc5b1b9860df0a2.avif",
                    desc: "Набор юного космонавта, который легко настроить по вкусу ребенка: две закуски и напиток на выбор. В каждом комбо игрушка, а в нашем приложении игра-компаньон",
                    items: [{ price: 400 }],
                  },
                  {
                    name: "Додо Бокс",
                    id: 5,
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11ef7a3e8180cb1aadc5b1b9860df0a2.avif",
                    desc: "Набор юного космонавта, который легко настроить по вкусу ребенка: две закуски и напиток на выбор. В каждом комбо игрушка, а в нашем приложении игра-компаньон",
                    items: [{ price: 400 }],
                  },
                ]}
              />
            </Flex>
          </div>
        </Flex>
      </Container>
    </>
  );
}
