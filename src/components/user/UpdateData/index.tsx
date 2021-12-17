import { MdOutlineCancelPresentation } from "react-icons/md";
import { BiSave } from "react-icons/bi";
import { Container } from "./style";
import { Button } from "../Button";
import { useAuth } from "../../../contexts/Auth";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { useForm } from "react-hook-form";

interface Iuser {
  email: string;
  name: string;
  address: IuserAddress;
}

interface IuserAddress {
  street?: string;
  number?: number;
  city: string;
  zip_code: string;
}

export const UpdateData = ({ handleUser }: any) => {
  const { handleSubmit, register } = useForm();

  const { token, userId } = useAuth();


  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [zip_code, setZip_code] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const reqUser = async () => {
    const response = await api.get<Iuser>(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setName(response.data.name);
    setEmail(response.data.email);
    if (response.data.address) {
      setZip_code(response.data.address.zip_code);
      setCity(response.data.address.city);
    }
  };

  const userAddressUpdate = async () => {
    const response = await api.patch(
      `/users/${userId}`,
      {
        name: name, email: email
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data)
  };

  useEffect(() => {
    reqUser();
  }, []);

  return (
    <Container>
      <h3>Altere seus dados</h3>

      <form onSubmit={handleSubmit(userAddressUpdate)}>
        <label>Nome:</label>
        <input
          {...register("name")}
          placeholder="Insira seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          {...register("email")}
          placeholder="adriano@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="content-button">
          <Button onClick={handleUser} redTheme>
            <MdOutlineCancelPresentation /> Cancelar
          </Button>
          <Button>
            {" "}
            <BiSave /> Salvar
          </Button>
        </div>
      </form>
    </Container>
  );
};
