import { Category } from "@prisma/client";
import { Categories } from "../components/Categories/Categories";
import { SortPopup } from "../components/SortPopup/SortPopup";
import s from "./Topbar.module.scss";
import Container from "@/shared/ui/Container/Container";
type TopbarProps = {
  categories: Category[];
};

export const Topbar = ({ categories }: TopbarProps) => {
  return (
    <div className={s.topbar}>
      <Container className={s.wrapper}>
        <Categories category={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
