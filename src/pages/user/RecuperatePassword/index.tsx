import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../../../assets/logo.svg";
import { DataForm } from "../../../types/AuthContext";
import { useAuth } from "../../../contexts/Auth";
import { toast } from "react-toastify";
import api from "../../../services/api";

export const RecuperatePassword = () => {
  const { setToken } = useAuth();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(" Email inválido!")
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
      await api.patch("/users/recuperate/password", data);
      await toast.success("Sua nova senha foi enviado para seu email!", {
        position: "top-right",
        theme: "dark",
      });
      navigate("/login-user");
    } catch {
      toast.error("Email não cadastrado", {
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
          <h1>Digite seu email para recuperar sua senha:</h1>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            placeholder="Digite seu email..."
            className="FirstInput"
            {...register("email")}
          />

          <button className="Login">Enviar</button>
        </form>
      </section>
    </Container>
  );
};
