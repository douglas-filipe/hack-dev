import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #181a20;

  button{
    cursor: pointer;
  }

  .Bg {
    display: none;
    background: #1548a5;
    position: relative;

    h1 {
      font-weight: bold;
      font-size: 24px;
      margin-bottom: 16px;
    }

    section {
      display: flex;
      height: 100vh;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      img {
        width: 300px;
      }
    }

    img:nth-child(1) {
      width: 200px;
      position: absolute;
    }

    img:nth-child(3) {
      width: 200px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
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
      height: 700px;

      h1 {
        text-align: center;
        margin-bottom: 35px;
        font-size: 24px;
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
        width: 250px;
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

      .LoginGoogle {
        display: flex;
        justify-content: center;

      }

      .LoginLink {
        text-align: center;
        margin: 28px auto;
        color: #a8a8ab;
        font-weight: 600;
        font-size: 14px;
        width: 200px;

        a {
          text-decoration: none;
          color: #4a5bd5;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .Bg {
      width: 50vw;
      display: initial;
    }

    .Form {
      width: 50vw;
      align-items: center;

      form{
          width: 350px;

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

  @media (min-width: 1024px) {

    .Form{
        form{
            width: 400px;
        }
    }
    .Bg {
      img:nth-child(1) {
        width: 200px;
      }

      img:nth-child(3) {
        width: 200px;
      }

      section {
        img {
          width: 450px;
        }
        h1 {
          font-size: 36px;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .Bg {
      img:nth-child(1) {
        width: 273px;
      }

      img:nth-child(3) {
        width: 273px;
      }

      section {
        img {
          width: 450px;
        }
        h1 {
          font-size: 36px;
        }
      }
    }
  }
`;
