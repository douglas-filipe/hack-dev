import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "./style";
import { MdOutlineCancel } from 'react-icons/md'

export const UpdatePassword = ({ handlePassword, setShow }: any) => {
  return (
    <Container>
    <span className="cancel" onClick={() => setShow(false)}> <MdOutlineCancel/> </span>  
    <h3>Altere sua senha</h3>
      <form>
        <Input title="Nova senha" placeholder="Digite sua senha" />

        <Input title="Confirmar senha" placeholder="Confirme sua senha" />
        <Button onClick={handlePassword}>Alterar senha</Button>
      </form>
    </Container>
  );
};
