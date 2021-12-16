import { Container } from "./style"
import subscription from '../../../assets/login-user/inscricao.svg'

interface IPropSubscription {
    title: string,
    group: number,
    event: string | ''
}

export const CardSubscription = ({ title,group ,event}: IPropSubscription) => {
    return (
        <Container>
            <span className='title'>
            { title }
            <img src={subscription} alt='img'/>
            </span>
            <p className='main'> <span> {event} </span> <span> Grupo {group} </span>  </p>
        </Container>
    )
}