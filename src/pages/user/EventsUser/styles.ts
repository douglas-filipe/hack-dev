import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background: #131a21;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    
  }
`;

export const Positioner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 50px 20px;
  margin: 0;
  background-color: #131a21;

  @media (max-width: 767px) {
    width: 100vw;
  }

  @media (max-width: 420px) {
    padding: 30px 10px;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: #151e29;
  padding: 15px;
  padding-top: 50px;
  width: 100%;
  max-width: 670px;
  /* height: 75vh; */
  min-height: 500px;

  h1 {
    border-bottom: 1px solid #353f4d;
    height: 60px;
    font-size: 22px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
  }
  @media (max-width: 767px) {
    padding: 20px 10px;
    min-width: 300px;
    height: 75vh;
  }
`;

export const Events = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  width: 100%;

  ::-webkit-scrollbar {
    background-color: #131a21;
    width: 11px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #252d39;
    border-radius: 10px;
  }
`;
