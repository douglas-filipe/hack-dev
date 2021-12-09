import { ReactNode } from 'react'
import { Container } from './style'


interface IPropsButton {
    children: ReactNode
    redTheme?: boolean
    onClick?: () => void;

}

export const Button = ({ children, redTheme=false, onClick}: IPropsButton) => {

    return(
        <Container redTheme={redTheme} onClick={onClick}>
            {children}
        </Container>
    )
}