import { useState } from "react";
import {
  BsPencilSquare as Pencil,
  BsPersonCircle as User,
} from "react-icons/bs";
import { RiLockPasswordLine as Lock } from "react-icons/ri";
import { Button } from "../Button";
import { UpdateData } from "../UpdateData";
import { UpdatePassword } from "../UpdatePassword";
import { Container, Content, UpdateBox } from "./style";

export const CardUser = () => {
  const [updateUser, setUpdateUser] = useState(false);
  const [updatePassword, setUpdadePassword] = useState(false);

  const handleUser = () => {
    setUpdateUser(!updateUser);
  };

  const handlePassword = () => {
    setUpdadePassword(!updatePassword);
  };

  const data = [
    {
      name: "monica",
      address: "adress, adress, nº105",
      CEP: "11423-320",
      email: "monica@mail",
    },
  ];
  return (
    <Container>
      <Content>
        <div>
          <User className="icon" />
        </div>
        <div>
          {data.map((elem, index) => {
            return (
              <div key={index} className="user-box">
                <p>Nome: {elem.name}</p>
                <p>Endereço: {elem.address}</p>
                <p>Cep: {elem.CEP}</p>
                <p>Email: {elem.email}</p>
                <div>
                  <Button redTheme={false} onClick={handleUser}>
                    <Pencil />
                    Alterar dados
                  </Button>
                  <Button redTheme={true} onClick={handlePassword}>
                    <Lock />
                    Alterar senha
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Content>
      {updateUser && (
        <UpdateBox>
          <UpdateData handleUser={handleUser} />
        </UpdateBox>
      )}
      {updatePassword && (
        <UpdateBox>
          <UpdatePassword handleUser={handleUser} />
        </UpdateBox>
      )}
    </Container>
  );
};
