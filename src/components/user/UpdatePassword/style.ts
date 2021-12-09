import styled from "styled-components";

export const Container = styled.div`
    
    
    width: 90%;
    height: 320px;
    margin: 0 auto;
    background: #181A20;
    border-radius: 23px;
    padding:15px;
    
    h3{
        font-family: 'Roboto', sans-serif;
        color: #ffff;
        font-weight: bold;
        text-align: center;
        font-size: 18px;
        margin: 10px;
    }
    
    form{
        .Button{
            margin-top: 20px;
            width: 100%;
            height: 45px;
            font-size: 16px;
            font-weight: bold;
        }
          
    }

    @media (min-width: 600px){
        width: 400px;
    }

`