import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  width: 400px;
  height: 500px;
  background-color: #151e29;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 10px;
  .Unsubscribe{
    background: #50677E;
  }
  

  p {
    font-weight: bold;
    margin: 20px;
    span {
      font-weight: lighter;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 456px) {
    width: 300px;
  }
`;

export const Back = styled.div`
  width: 50px;
  height: 50px;
  background-color: #282f92;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    filter: brightness(1.2);
  }
`;

export const Button = styled.button`
  width: 145px;
  height: 45px;
  border: none;
  box-sizing: border-box;
  background-color: #9b1f48;
  border-radius: 5px;
  color: white;
  cursor: ${({ disabled }) => (!disabled ? "pointer" : "")};
  align-self: center;
  margin-top: 50px;

  :hover {
    filter: ${({ disabled }) => (!disabled ? "brightness(1.2)" : "")};
  }

  
  
`;
