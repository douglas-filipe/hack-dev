import styled from "styled-components";

interface iLandingPageProps{
  openMenu: boolean
}

export const Container = styled.main<iLandingPageProps>`
  width: 100vw;
  height: 100vh;
  /*overflow-y: hidden;*/
  overflow-x: hidden;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 10px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background-color: #0e1222; /* color of the scroll thumb */
  }

  ::-webkit-scrollbar-thumb {
    background: #1c2230; /* color of the tracking area */
    border-radius: 20px; /* roundness of the scroll thumb */
  }

  .Apresentation {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 270px;
    }
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        color: #d3d7dd;
        font-size: 18px;
        text-align: center;
        width: 80%;
        max-width: 768px;
        font-weight: bold;
        margin: 40px auto;
      }
      button {
        width: 170px;
        background-color: #2a9cc0;
        color: white;
        border-radius: 6px;
        height: 40px;
        font-size: 14px;
        font-weight: bold;
        border: none;
        margin: 20px 0 50px 0;
        cursor: pointer;
      }
    }
  }

  .Dev,
  .Groups {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #d3d7dd;
      font-size: 18px;
      text-align: center;
      width: 80%;
      font-weight: bold;
      margin: 40px auto;
    }
    img {
      width: 270px;
      margin-top: 20px;
    }
  }

  .Groups {
    flex-direction: column-reverse;
  }

  .Programation {
    > h1 {
      color: #d3d7dd;
      font-size: 18px;
      text-align: center;
      font-weight: bold;
      margin: 40px auto;
    }

    .Timeline {
      display: flex;
      width: 90vw;
      justify-content: space-between;
      margin: auto;

      .Checklist {
        display: flex;
        flex-direction: column;
        gap: 112px;
        button {
          width: 100px;
          height: 40px;
          background: #3364e1;
          color: white;
          font-weight: 300;
          border: none;
          border-radius: 6px;
          margin-top: 112px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }

      .TitleDescription {
        width: 120px;

        div {
          margin-bottom: 55px;
          height: 200px;
        }
        h1 {
          width: 100px;
          font-size: 18px;
          color: white;
          font-weight: bold;
        }
        p {
          width: 130px;
          font-size: 14px;
          margin-top: 20px;
        }
      }

      .TimelineNumbers {
        border: 1px dashed #9f9f9f;
        height: 1600px;
        width: 0px;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 200px;

        div {
          width: 52px;
          height: 52px;
          background: #16172b;
          border: 1px solid white;
          border-radius: 50%;
          font-size: 24px;
          font-weight: bold;
          color: white;
          text-align: center;
          line-height: 52px;
          transform: translate(-50%, -10%);
        }
      }
    }
  }

  .Depositions {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 100px;

    .Comma {
      margin-bottom: 20px;
    }

    .Cards {
      display: flex;
      flex-direction: column;
      gap: 30px;
      .Card {
        background: #21293c;
        display: flex;
        flex-direction: column;
        padding: 20px;
        width: 180px;
        color: #919aab;
        margin: auto;

        p {
          margin-bottom: 20px;

          font-weight: bold;
        }

        div {
          display: flex;
          div {
            display: flex;
            flex-direction: column;
          }
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }
    }

    h1 {
      color: #d3d7dd;
      font-size: 18px;
      text-align: center;
      font-weight: bold;
      margin: 40px auto;
    }
  }

  .Company {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    h1 {
      color: #d3d7dd;
      font-size: 18px;
      text-align: center;
      width: 80%;
      font-weight: bold;
      margin: 40px auto;
    }

    > div {
      width: 90%;
      display: flex;
      margin: auto;
      justify-content: center;
      gap: 30px;
      img {
        width: 50px;
      }
    }

    button {
      width: 220px;
      background-color: #2a9cc0;
      color: white;
      border-radius: 6px;
      height: 40px;
      font-size: 14px;
      font-weight: bold;
      border: none;
      margin: 40px auto;
      cursor: pointer;
    }
  }

  header {
    width: 90vw;
    display: flex;
    justify-content: space-between;
    margin: 20px auto;
    align-items: center;

    img {
      width: 150px;
    }

    svg {
      width: 35px;
      height: 35px;
    }

    nav {
      position: fixed;
      background-color: rgb(1, 1, 1, 0.97);
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      visibility: ${props => props.openMenu ? "visible": "hidden"};
      z-index: 100;
      transition: 0.4s;
      animation: ${props => props.openMenu ? "0.4s animateMenuLandingPage": "none"};
      opacity: ${props => props.openMenu ? "1": "0"};
      @keyframes animateMenuLandingPage {
        from {
          opacity: 0
        }
      
        to {
          opacity: 1
        }
      }

      .BtnClose{
        position: absolute;
        right: 0;
        width: 40px;
        height: 40px;
      }

      ul {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        justify-content: flex-start;
        align-items: center;
        margin-top: 100px;

        li {
          padding-bottom: 20px;
          font-size: 18px;
          font-weight: bold;
          color: white;
          cursor: pointer;

          a{
            color: white;
            text-decoration: none
          }
        
        }
      }
    }
  }

  footer{
    width: 100%;
    background: #0C1524;
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    .Company {
      h1 {
        color: #d3d7dd;
        font-size: 26px;
        text-align: center;
        width: 80%;
        font-weight: bold;
        margin: 95px auto;
      }

      button {
        font-size: 24px;
        width: 430px;
        height: 65px;
      }

      > div {
        width: 90%;
        gap: 70px;
        margin-bottom: 40px;
        img {
          width: 81px;
        }
      }
    }

    .Programation {
      > h1 {
        font-size: 26px;
        margin: 95px auto;
      }
      .Timeline {
        display: flex;
        width: 70%;
        max-width: 600px;

        .Checklist {
          gap: 70px;
          button {
            margin-bottom: 5px;
          }
        }

        .TitleDescription {
          width: 200px;

          div {
            height: 200px;
          }
          h1 {
            width: 200px;
          }
          p {
            width: 200px;
            font-size: 16px;
          }
        }

        .Checklist {
          button {
            width: 161px;
            height: 69px;
            font-size: 18px;

            svg {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }

    .Apresentation {
      img {
        width: 343px;
      }
      div {
        h1 {
          font-size: 26px;
        }

        button {
          font-size: 24px;
          width: 270px;
          height: 65px;
        }
      }
    }
    .Dev,
    .Groups {
      flex-direction: row;
      margin: 95px auto;
      h1 {
        margin: 0;
        width: 300px;
        font-size: 26px;
      }
      img {
        margin: 0;
        width: 343px;
      }
    }
    .Menu {
      display: none;
    }

    .Depositions {
      width: 100%;
      max-width: 768px;
      h1 {
        font-size: 26px;
        text-align: center;
        width: 80%;
        margin: 95px auto;
      }

      .Cards {
        display: flex;
        flex-direction: row;

      }
    }

    header {
      margin-bottom: 100px;
      img {
        width: 200px;
      }
      nav {
        background-color: transparent;
        position: initial;
        width: initial;
        height: initial;
        visibility: visible;
        display: initial;
        opacity: 1;

        .BtnClose{
          display: none;
        }

        ul {
          width: initial;
          height: initial;
          flex-direction: row;
          margin-top: 0px;

          gap: 58px;

          li {
            padding-bottom: 0px;
            color: #787e8c;
            transition: 0.3s;
            :hover {
              color: white;
            }

            a{
              color: #787e8c;
            }
          }
        }
      }
    }
  }

  .Background {
    position: absolute;
    width: 100vw;
    height: 100%;
  }
`;
