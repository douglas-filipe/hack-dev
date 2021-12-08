import { Container } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMenu } from "../../contexts/Menu";
import { MdNotificationsNone } from "react-icons/md";

export const MenuMobile = () => {
  const { setOpenMenu } = useMenu();
  return (
    <Container>
      <GiHamburgerMenu onClick={() => setOpenMenu(true)} className="Menu" />
      <MdNotificationsNone className="Notifications" />
    </Container>
  );
};
