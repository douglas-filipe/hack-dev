import styled from "styled-components";

export const Container = styled.div`
    
    
    width: 90%;
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
        
        .content-button{
            display: flex;
            justify-content: space-between;
            margin: 25px 0 10px  0;

            
            svg{
                margin-right: 5px;
            }
        }
    }

    @media (min-width: 600px){
        width: 400px;
    }

`