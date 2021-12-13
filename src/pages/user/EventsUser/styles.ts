import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vw;
  background: #131a21;
  overflow: scroll;
  display: flex;
  flex-direction: row;

  ::-webkit-scrollbar {
    display: none;
  }
`;
