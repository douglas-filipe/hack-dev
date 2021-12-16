import { MenuLateral } from "../../../components/MenuLateral";
import { MenuMobile } from "../../../components/MenuMobile";
import { CardUser } from "../../../components/user/CardUser";
import { Container } from "./style";

export const ConfigUser = () => {
  return (
    <>
      <Container>
        <MenuLateral />
        <MenuMobile />
        <CardUser />
      </Container>
    </>
  );
};
