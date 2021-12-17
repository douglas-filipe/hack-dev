import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: stretch;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;

  .inputs {
    background-color: #262a34;
    width: 300px;
    height: 57px;
    border-radius: 13px;

    display: flex;
    position: relative;
    font-size: 1.2rem;

    input {
      font-size: 1.2rem;
      width: 100%;
      height: 27px;
      background: #262a34;
      border-radius: 13px;
      padding: 15px;
      color: white;
      border: none;
    }
    input:focus {
      outline: none;
      border: 1px solid #3f4af1;
    }
  }
  .icons {
    position: absolute;
    top: 35%;
    right: 5%;
    cursor: pointer;
  }
  h1 {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .box {
    height: 200px;
    margin: 50px 0 10px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  @media only screen and (min-width: 768px) {
    flex: 1;
    h1 {
      font-size: 1.8rem;
    }

    .inputs {
    background-color: #262a34;
    width: 463px;

    input {
      width: 100%;
    }
  }
`;

export const CardBox = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  input {
    width: 100%;
  }
`;
