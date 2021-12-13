import { MenuLateral } from "../../../components/MenuLateral";
import { CardUser } from "../../../components/user/CardUser";
import { Container } from "./style";

export const ConfigUser = () => {
  return (
    <Container>
      <MenuLateral />
      <CardUser />
    </Container>
  );
};
