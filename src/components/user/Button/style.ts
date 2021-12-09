import styled from "styled-components";

interface IButtonProps{
    redTheme: boolean
}

export const Container = styled.button<IButtonProps>`
    
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => (props.redTheme? "#9B1F48": "#047A49")};
    font-family: 'Roboto', sans-serif;
    padding: 10px;
    font-size: 14px;
    border-radius: 9px;
    color: #fff;
    width: 120px;
    border: 0;
`
