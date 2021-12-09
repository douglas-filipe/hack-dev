import { Button } from "../Button"
import { Input } from "../Input"
import { Container } from "./style"


export const UpdatePassword = () => {
    return (
        <Container>

            <h3>Altere sua senha</h3>

            <form>
                <Input
                    title="Nova senha"
                    placeholder="Digite sua senha"
                />

                <Input
                    title="Confirmar senha"
                    placeholder="Confirme sua senha"
                />

                <Button>Alterar senha</Button>
            
            </form>
        </Container>
    )
}