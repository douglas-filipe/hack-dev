import { Container } from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BsTrophy } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { CustomLink } from "../CustomLink";

import Logo from "../../assets/logo.svg";
import { useMenu } from "../../contexts/Menu";

export const MenuLateral = () => {
  const { openMenu, setOpenMenu } = useMenu();
  return (
    <Container openMenu={openMenu}>
      <div className="contents">
        <IoMdClose className="Close" onClick={() => setOpenMenu(false)} />
        <img src={Logo} alt="Logotipo" />
        <CustomLink to="/home-user">
          <AiOutlineHome />
          <span>Home</span>
        </CustomLink>

        <CustomLink to="/events-user">
          <BsCalendarEvent />
          <span>Eventos</span>
        </CustomLink>

        <CustomLink to="/">
          <BsTrophy />
          <span>Premiações</span>
        </CustomLink>

        <CustomLink to="/">
          <FiSettings />
          <span>Configurações</span>
        </CustomLink>

        <button className="Logout">
          <FiLogOut />
          <span>Sair</span>
        </button>
      </div>
    </Container>
  );
};
