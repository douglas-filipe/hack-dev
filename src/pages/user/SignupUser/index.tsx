import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../../../assets/logo.svg";
import EscadaCima from "../../../assets/login-user/escada_cima.svg";
import EscadaBaixo from "../../../assets/login-user/escada_baixo.svg";
import vetor from "../../../assets/signup-user/img-signup.svg";
import { DataForm } from "../../../types/AuthContext";
import { useAuth } from "../../../contexts/Auth";
import { toast } from "react-toastify";
import api from "../../../services/api";
import GoogleLogin from "react-google-login";

export const SignupUser = () => {
  const { setToken, setUserId } = useAuth();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(" Email inválido!")
      .required(" *Campo obrigatório"),
    password: yup.string().required(" *Campo obrigatório"),
    name: yup.string().required(" *Campo obrigatório"),
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
      const response = await api.post("/users/signup", data);
      await toast.success("Sucesso ao criar sua conta!", {
        position: "top-right",
        theme: "dark",
      });
      localStorage.setItem("@hack-dev/token", response.data.token);
      setToken(response.data.token);
      navigate("/login-user");
    } catch {
      toast.error("Email já cadastrado", {
        position: "top-right",
        theme: "dark",
      });
    }
  };
  const responseGoogle = async (response: any) => {
    const {
      googleId,
      profileObj: { email, name },
    } = response;
    try {
      await api.post("/users/signup", {
        name: name,
        email: email,
        password: googleId,
      });

      await toast.success("Sucesso ao criar sua conta!", {
        position: "top-right",
        theme: "dark",
      });
      
      const response = await api.post("/users/login", {
        email: email,
        password: googleId,
      });
      await localStorage.setItem("@hack-dev/token", response.data.token);
      await localStorage.setItem("@hack-dev/userId", response.data.user.id);
      await setToken(response.data.token);
      await setUserId(response.data.user.id);
      navigate("/home-user");

    } catch {
      toast.error("Email já cadastrado", {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  const responseGoogleError = () => {};

  return (
    <Container>
      <section className="Form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img src={Logo} alt="Logotipo" />
          <h1>Crie sua conta</h1>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            placeholder="Digite seu nome..."
            className="FirstInput"
            {...register("name")}
          />
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
          <Link to="/reset-password"></Link>

          <button className="Login">Enviar</button>
          <GoogleLogin
            className="LoginGoogle"
            clientId="748847660432-d9eoipaomkk4tu5rqh09jo4chevi4qv1.apps.googleusercontent.com"
            buttonText="Continuar com o Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogleError}
          />
          <p className="LoginLink">
            Já tem uma conta? <Link to="/login-user">Faça o login</Link>
          </p>
        </form>
      </section>
      <section className="Bg">
        <img src={EscadaCima} alt="Escada Cima" />
        <section>
          <h1>É novo aqui?</h1>
          <img src={vetor} alt="Vetor" />
        </section>
        <img src={EscadaBaixo} alt="Escada Baixo" />
      </section>
    </Container>
  );
};
