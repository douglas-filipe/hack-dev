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
