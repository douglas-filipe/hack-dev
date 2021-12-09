import { Link } from "react-router-dom";
import { Container } from "./styles";
import Logo from "../../../assets/logo.svg";
import { FcGoogle } from "react-icons/fc";
import EscadaCima from "../../../assets/login-user/escada_cima.svg";
import EscadaBaixo from "../../../assets/login-user/escada_baixo.svg";
import vetor from "../../../assets/login-user/vetor.svg";

export const LoginUser = () => {
  return (
    <Container>
      <section className="Bg">
        <img src={EscadaCima} alt="Escada Cima" />
        <section>
          <h1>Bem vindo de volta!</h1>
          <img src={vetor} alt="Vetor" />
        </section>
        <img src={EscadaBaixo} alt="Escada Baixo" />
      </section>
      <section className="Form">
        <form>
          <img src={Logo} alt="Logotipo" />
          <h1>Entre em sua conta</h1>
          <label htmlFor="email">Email:</label>
          <input id="email" placeholder="Digite seu email..." className="FirstInput"/>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha..."
          />
          <Link to="/reset-password">Esqueceu sua senha?</Link>

          <button className="Login">Entrar</button>
          <button className="LoginGoogle">
            <FcGoogle />
            Entrar com google
          </button>
          <p className="LoginLink">
            Não possui uma conta? <Link to="/signup-user">Cadastre-se</Link>
          </p>
        </form>
      </section>
    </Container>
  );
};
