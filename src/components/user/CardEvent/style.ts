import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #353F4D;
    
    height: 70px;
    
    p{
        display: flex;
        flex-direction: column;
    }

    span{
        margin: 5px 0;
        button{
            background: #DB8B15;
            border: 0;
            color: white;
            height: 38px;
            width: 100px;
            border-radius: 9px;
            font-size: 14px;
            cursor: pointer;
        }
    }
    @media (min-width: 700px) {
        margin: 0 3rem;
    }
`