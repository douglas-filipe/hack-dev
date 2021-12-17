import { Input } from "../Input";
import { Container } from "./style";
import { MdOutlineCancel } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../../services/api";
import { useAuth } from '../../../contexts/Auth'
import { toast } from "react-toastify";

interface IProps {
  func: (state: boolean) => void
  state: boolean
}

interface IPropsReq {
  newPassword: string;
  confirmPassword: string;
}


export const UpdatePassword = ({ func, state }: IProps) => {

  const schema = yup.object().shape({
    newPassword: yup.string().required("*Campo obrigatório"),
    confirmPassword: yup.string()
    .oneOf([yup.ref('newPassword'), null], 'As senhas não coincidem')
  });

  const { userId, token} = useAuth()

  const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)})

  const onSubmit = async (data: IPropsReq) => {
    
    try{
      api.patch(`/users/${userId}`, {password: data.confirmPassword}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      toast.success('senha atualizada com sucesso')
    }
    catch(e){
      toast.error('Não foi possível atualizar a sua senha')
    }

    func(!state)
  }

  return (
    <Container>
    <span className="cancel" onClick={() => func(!state)}> <MdOutlineCancel/> </span>  
    <h3>Altere sua senha</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input title="Nova senha" placeholder="Digite sua senha" name="newPassword" register={register}/>
        <Input title="Confirmar senha" placeholder="Confirme sua senha" name="confirmPassword" register={register}/>
        <p className="error">{errors.confirmPassword?.message}</p>
        <button type="submit"> Alterar senha </button>
        </form>
    </Container>
  );
};
