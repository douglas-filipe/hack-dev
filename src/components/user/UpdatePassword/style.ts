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
        margin-top: 0;
    }
    
    form{
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            background:#047A49;
            font-weight: bold;
            font-size: 16px;
            margin: 0 auto;
            margin-top: 2rem;
            padding: 10px;
            font-family: 'Roboto', sans-serif;
            border-radius: 9px;
            border: 0;
            color: #fff;
            width: 100%;
            height: 45px;
        }

        .error{
            color: red;
            margin-top: 10px;
            margin-left: 5px
        }
          
    }
    .cancel{
        position: relative;
        left: 294px;
        top: -4px;
        font-size: 1.75rem;
        cursor: pointer;
        svg{
            color: red;
        }
    }

    @media (min-width: 600px){
        width: 400px;

        .cancel{
            left: 375px
        }
        
    }

`