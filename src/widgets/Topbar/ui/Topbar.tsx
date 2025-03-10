import { Categories } from "../components/Categories/Categories";
import { SortPopup } from "../components/SortPopup/SortPopup";
import s from "./Topbar.module.scss";
import Container from "@/shared/ui/Container/Container";
export const Topbar = () => {
  return (
    <div className={s.topbar}>
      <Container className={s.wrapper}>
          <Categories />
          <SortPopup />
      </Container>
    </div>
  );
};
