import { useEffect, useState } from "react";
import {
  BsPencilSquare as Pencil,
  BsPersonCircle as User,
} from "react-icons/bs";
import { RiLockPasswordLine as Lock } from "react-icons/ri";
import { useUser } from "../../../contexts/User";
import { Load } from "../../load";
import { Button } from "../Button";
import { UpdateData } from "../UpdateData";
import { UpdatePassword } from "../UpdatePassword";
import { Container, Content, UpdateBox } from "./style";


export const CardUser = () => {
  const [updateUser, setUpdateUser] = useState(false);
  const [updatePassword, setUpdadePassword] = useState(false);


  const { user, getUser } = useUser();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const reqUser = async () => {
      await getUser();
      setLoading(true);
    };

    reqUser()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleUser = () => {
    setUpdateUser(!updateUser);
  };

  const handlePassword = () => {
    setUpdadePassword(!updatePassword);
  };

  return (
    <Container>
      <>
        {loading ? (
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
                      {elem.address
                        ? " " +
                          elem.address.street +
                          " " +
                          elem.address.number +
                          " - " +
                          elem.address.district +
                          " - " +
                          elem.address.city +
                          "/" +
                          elem.address.state
                        : " "}
                    </p>
                    <p>Cep: {elem.address ? elem.address.zip_code : " "}</p>
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
        ) : (
          <Load />
        )}
      </>
      {updateUser && (
        <UpdateBox>
          <UpdateData handleUser={handleUser} />
        </UpdateBox>
      )}
      {updatePassword && (
        <UpdateBox>
          <UpdatePassword func={setUpdadePassword} state={updatePassword}/>
        </UpdateBox>
      )}
    </Container>
  );
};
