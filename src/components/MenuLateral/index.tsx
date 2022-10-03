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
import { useAuth } from "../../contexts/Auth";
import { useLocation, useMatch, useResolvedPath } from "react-router-dom";

export const MenuLateral = () => {
  const { openMenu, setOpenMenu } = useMenu();
  const { setToken, setUserId } = useAuth();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("@hack-dev/userId");
    localStorage.removeItem("@hack-dev/token");
    setToken("");
    setUserId("");
    setOpenMenu(false);
  };

  return (
    <Container background={location.pathname} openMenu={openMenu}>
      <div className="contents">
        <IoMdClose className="Close" onClick={() => setOpenMenu(false)} />
        <img src={Logo} alt="Logotipo" />
        <CustomLink to="/home-user" onClick={() => setOpenMenu(false)}>
          <AiOutlineHome />
          <span>Home</span>
        </CustomLink>

        <CustomLink to="/events-user" onClick={() => setOpenMenu(false)}>
          <BsCalendarEvent />
          <span>Eventos</span>
        </CustomLink>

        <CustomLink to="/prize-user" onClick={() => setOpenMenu(false)}>
          <BsTrophy />
          <span>Premiações</span>
        </CustomLink>

        <CustomLink to="/config-user" onClick={() => setOpenMenu(false)}>
          <FiSettings />
          <span>Configurações</span>
        </CustomLink>

        <button className="Logout" onClick={logout}>
          <FiLogOut />
          <span>Sair</span>
        </button>
      </div>
    </Container>
  );
};
