import { MdOutlineCancelPresentation } from 'react-icons/md'
import { BiSave } from 'react-icons/bi'
import { Input } from '../Input'
import { Container } from './style'
import { Button } from '../Button'


export const UpdateData = () => {
    return (
      <Container>

        <h3>Altere seus dados</h3>

        <form>
          <Input 
            title='Nome'
            placeholder='Adriano'
          />

          <Input 
            title='Email'
            placeholder='adriano@gmail.com'
          />
           
          <Input 
            title='Endereço'
            placeholder='Rua 29, casa de 2 andares'
          />     

          <Input 
            title='Cep'
            placeholder='00000-00'
          />

          <div className='content-button'>
            <Button redTheme><MdOutlineCancelPresentation/>  Cancelar</Button>
            <Button> <BiSave/> Salvar</Button>
          </div>

        </form>
      </Container>

    )
}