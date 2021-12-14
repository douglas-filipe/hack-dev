import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #181a20;

  button{
    cursor: pointer;
  }


  .Form {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      width: 270px;

      h1 {
        text-align: center;
        margin-bottom: 35px;
        font-size: 18px;
        font-weight: bold;
      }

      label {
        color: #a7a9b2;
        margin-bottom: 13px;
        font-size: 18px;
        font-weight: bold;
      }

      input {
        background: #262a34;
        border: none;
        color: #fbfbfb;
        height: 53px;
        border-radius: 13px;
        padding-left: 23px;
        font-size: 14px;
        font-weight: 600;
      }

      input:focus {
        outline: 2px solid #3993dd;
      }

      .FirstInput {
        margin-bottom: 28px;
      }

      > a {
        color: #505156;
        font-size: 14px;
        margin-top: 12px;
        text-align: right;
        font-weight: 600;
        margin-bottom: 61px;
        text-decoration: none;
      }

      img {
        width: 150px;
        margin: 29px auto;
      }

      button {
        height: 53px;
        width: 220px;
        margin: 0 auto;
        font-size: 14px;
        border-radius: 13px;
        border: none;
        text-align: center;
        font-weight: bold;
      }

      .Login {
        background: #5468ff;
        margin-bottom: 14px;
        color: #ffffff;
      }

    }
  }

  @media (min-width: 768px) {

    .Form {
      align-items: center;
      align-items: flex-start;
      margin-top: 100px;
  

      form{
          width: 400px;

          button{
              width: 310px;
          }

          .LoginLink{
              width: 300px;
          }

          img{
              width: 200px;
          }
      }
    }
  }


`;
