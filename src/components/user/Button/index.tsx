import { ReactNode } from 'react'
import { Container } from './style'


interface IPropsButton {
    children: ReactNode
    redTheme?: boolean
    onClick?: () => void;

}

export const Button = ({ children, redTheme=false, onClick, ...rest}: IPropsButton) => {

    return(
        <Container {...rest} redTheme={redTheme} onClick={onClick} className='Button'>
            {children}
        </Container>
    )
}