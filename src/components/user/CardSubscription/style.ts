import styled from "styled-components";

export const Container = styled.div`
     
    display: flex;
    width: 330px;
    height: 119px;
    background: #151E29;
    border-radius: 15px;
    font-weight: 600;
    margin-bottom: 2rem;

    span {
       
    }

    .title{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background: #EF263D;
        border-radius: 15px 0 0 15px;
        padding: 5px;
        width: 86px;

        img{
            width: 40px;
            height: 40px;
        }
    }

    .main{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span{
            margin: 7px 0;
        }
    }
`