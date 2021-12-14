import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../../../assets/logo.svg";
import { FcGoogle } from "react-icons/fc";
import EscadaCima from "../../../assets/login-user/escada_cima.svg";
import EscadaBaixo from "../../../assets/login-user/escada_baixo.svg";
import vetor from "../../../assets/signup-user/img-signup.svg";
import { DataForm } from "../../../types/AuthContext";
import { useAuth } from "../../../contexts/Auth";
import { toast } from "react-toastify";
import api from "../../../services/api";

export const SignupUser = () => {
  const { setToken } = useAuth();
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
          <button className="LoginGoogle">
            <FcGoogle />
           Criar conta com o google
          </button>
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
