import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  background: #181a20;
  border-radius: 23px;
  padding: 15px;

  h3 {
    font-family: "Roboto", sans-serif;
    color: #ffff;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    margin: 10px;
  }

  form {
    
    .content-button {
      display: flex;
      justify-content: space-between;
      margin: 25px 0 10px 0;

      svg {
        margin-right: 5px;
      }
    }

    input {
      border: 1px solid;
      border-radius: 10px;
      background: #262a34;
      height: 40px;
      padding-left: 5px;
      color: #fbfbfb;
      font-size: 16px;
      font-style: italic;
      font-weight: 500;
      border: 1px solid #262a34;
      width: 100%;
      margin: 10px 0;
    }

    input:focus {
      outline: none;
      border: 1px solid #3f4af1;
    }

    input {
      display: flex;
      flex-direction: column;
      background: transparent;
      font-family: "Roboto", sans-serif;

      span {
        font-weight: bold;
        color: #a7a9b2;
        margin-top: 10px;
        margin-bottom: 3px;
        padding-left: 2px;
      }
    }
  }

  @media (min-width: 600px) {
    width: 400px;
  }
`;
