import { useState } from "react";
import {
  BsPencilSquare as Pencil,
  BsPersonCircle as User,
} from "react-icons/bs";
import { RiLockPasswordLine as Lock } from "react-icons/ri";
import { useUser } from "../../../contexts/User";
import { Button } from "../Button";
import { UpdateData } from "../UpdateData";
import { UpdatePassword } from "../UpdatePassword";
import { Container, Content, UpdateBox } from "./style";

export const CardUser = () => {
  const [updateUser, setUpdateUser] = useState(false);
  const [updatePassword, setUpdadePassword] = useState(false);

  const { user } = useUser();

  console.log(user[0].address.street);

  const handleUser = () => {
    setUpdateUser(!updateUser);
  };

  const handlePassword = () => {
    setUpdadePassword(!updatePassword);
  };

  return (
    <Container>
      <Content>
        <div>
          <User className="icon" />
        </div>
        <div>
          {user.map((elem, index) => {
            return (
              <div key={index} className="user-box">
                <p>Nome: {elem.name}</p>
                <p>
                  Endereço:
                  {" " +
                    elem.address.street +
                    " " +
                    elem.address.number +
                    " - " +
                    elem.address.district +
                    " - " +
                    elem.address.city +
                    "/" +
                    elem.address.state}
                </p>
                <p>Cep: {elem.address.zip_code}</p>
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
