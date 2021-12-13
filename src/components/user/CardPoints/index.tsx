import { Container } from './style'
import triangulo from '../../../assets/login-user/triangulo.svg'


interface IPropsCardPoints {
    title: string,
    points: number,
}

export const CardPoints =  ({ title, points }: IPropsCardPoints) => {
    return (
    <Container>
        <span className='title'>
            { title }
            <img src={triangulo} alt='img'/>
        </span>
        <span className='main'> Você tem { points } { points <= 1? 'ponto': 'pontos' }</span>
    </Container>
    )
}