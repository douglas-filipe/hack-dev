import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100%;
  background: #131a21;
  overflow-y: hidden;

  .content{
    margin: 0 auto;

  }

  .user{
    text-align: center;
    margin:2rem 0;
    span{
      font-weight: bold;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 700px) {
    display: flex;
    .user{
      width: 750px;
      text-align: left;
      margin: 0 auto;
      margin-top:2rem;
      margin-bottom: 2rem
    }

  }
`;


export const Main = styled.div`
  
  
  .info{
      height: 45%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      @media (min-width: 700px) {
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        width: 750px;
       
      }
  }


  .list-event{

    .span-loading{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 150px;
      margin: 0 auto;
    }
    
    border-radius: 15px;
    background: #151E29;
    width: 90%;
    margin: 0 auto;
    border-radius: 15px;
    padding: 10px;

   
    .title{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #353F4D;
      height: 60px;
      font-size: 22px;
      font-weight: bold;

    }

    
    .button-ver-mais{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      margin-top: 2rem;
      background: transparent;
      border: 0;
      color: white;
      font-size: 0.85rem;
      cursor: pointer;
    }

    @media (min-width: 700px) {
       width: 750px;

       .title{
         margin-left: 3rem;
       }
      
    }

  }



`