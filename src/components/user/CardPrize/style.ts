import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: #151e29;
  width: 179px;
  height: 221px;

  color: white;
  font-size: 1.2rem;
  border-radius: 16px;

  margin: 10px;
  h4 {
    font-weight: bold;
  }
  .icon {
    font-size: 5.8rem;
  }
  button {
    width: 100%;
    height: 34px;
    color: white;
    border: none;
    background-color: #047a49;
    border-radius: 0 0 16px 16px;
  }
`;
