import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  z-index: 5;

  .Menu {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .Notifications {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
