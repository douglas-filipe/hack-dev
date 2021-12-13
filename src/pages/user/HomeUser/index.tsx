import { MenuLateral } from "../../../components/MenuLateral"
import { Container } from "./styles";
import { MenuMobile } from "../../../components/MenuMobile";

export const HomeUser = () => {
  return(
    <Container className="Home">
      <MenuMobile/>
      <MenuLateral/>
    </Container>
  )
};
