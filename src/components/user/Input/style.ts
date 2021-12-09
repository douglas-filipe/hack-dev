import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
    font-family: 'Roboto', sans-serif;

    span{
        font-weight: bold;
        color: #A7A9B2;
        margin-top: 10px;
        margin-bottom: 3px;
        padding-left: 2px;
    }

    input{
        border: 1px solid;
        border-radius: 10px;
        background: #262A34;
        height: 40px;
        padding-left: 5px;
        color: #FBFBFB;
        font-size: 16px;
        font-style: italic;
        font-weight: 500;
        border: 1px solid #262A34;
    }

    input:focus  {
        outline: none;
        border: 1px solid #3F4AF1;
    }

`