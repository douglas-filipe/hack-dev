import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../../../assets/logo.svg";
import EscadaCima from "../../../assets/login-user/escada_cima.svg";
import EscadaBaixo from "../../../assets/login-user/escada_baixo.svg";
import vetor from "../../../assets/login-user/vetor.svg";
import { DataForm } from "../../../types/AuthContext";
import { useAuth } from "../../../contexts/Auth";
import { toast } from "react-toastify";
import api from "../../../services/api";
import GoogleLogin from "react-google-login";

export const LoginUser = () => {
  const { setToken, setUserId } = useAuth();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(" Email inválido!")
      .required(" *Campo obrigatório"),
    password: yup.string().required(" *Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmit = async (data: DataForm) => {
    try {
      const response = await api.post("/users/login", data);
      await toast.success("Sucesso ao entrar em sua conta!", {
        position: "top-right",
        theme: "dark",
      });
      localStorage.setItem("@hack-dev/token", response.data.token);
      localStorage.setItem("@hack-dev/userId", response.data.user.id);
      setToken(response.data.token);
      setUserId(response.data.user.id);
      navigate("/home-user");
    } catch {
      toast.error("Email ou senha incorretos", {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  const responseGoogle = async (response: any) => {
    const {
      profileObj: { email, googleId },
    } = response;
    console.log(response);
    try {
      const responseReq = await api.post("/users/login", {
        email: email,
        password: googleId,
      });
      await toast.success("Sucesso ao entrar em sua conta!", {
        position: "top-right",
        theme: "dark",
      });
      localStorage.setItem("@hack-dev/token", responseReq.data.token);
      localStorage.setItem("@hack-dev/userId", responseReq.data.user.id);
      setToken(responseReq.data.token);
      setUserId(responseReq.data.user.id);
      navigate("/home-user");
    } catch {
      toast.error("Conta google não vinculada", {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  const responseGoogleError = (response: any) => {
    console.log(response);
  };

  const clientId =
    "748847660432-0ami3kf5cho790k0nllpq3mkafar58u8.apps.googleusercontent.com";

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <img src={Logo} alt="Logotipo"/>
          <h1>Entre em sua conta</h1>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            placeholder="Digite seu email..."
            className="FirstInput"
            {...register("email")}
          />
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha..."
            {...register("password")}
          />
          <Link to="/recuperate-password">Esqueceu sua senha?</Link>

          <button className="Login">Entrar</button>

          <GoogleLogin
            className="LoginGoogle"
            clientId={clientId}
            buttonText="Continuar com o Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogleError}
          />

          <p className="LoginLink">
            Não possui uma conta? <Link to="/signup-user">Cadastre-se</Link>
          </p>
        </form>
      </section>
    </Container>
  );
};
