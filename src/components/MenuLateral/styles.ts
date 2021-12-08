import styled from "styled-components";

interface IMenuLateralProps {
  openMenu: boolean;
}

export const Container = styled.div<IMenuLateralProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  background: rgba(1, 1, 1, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: ${(props) => (props.openMenu ? "visible" : "hidden")};
  

  img {
    width: 124px;
    margin: 10px auto 39px auto;
  }

  a {
    text-decoration: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 13px;
    margin-bottom: 30px;
    padding: 10px 20px;
  }

  /*a::before{
    content: "";
    width: 10px;
    height: 39px;
    background: blue;
    position: absolute;
    transform: translateX(10%);
    left: -4px;
    background: #D3D6DD;
    border-radius: 20px;
  }*/

  a svg {
    width: 25px;
    height: 25px;
  }

  .contents {
    width: 208px;
    height: 100vh;
    background: #10151d;
    display: flex;
    flex-direction: column;
  }

  .Logout {
    width: 78px;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    background: none;
    border: none;
    color: #d3d6dd;
    position: absolute;
    bottom: 20px;
    cursor: pointer;
  }

  .Logout svg {
    width: 25px;
    height: 25px;
  }

  .Close {
    width: 35px;
    height: 35px;
    margin-top: 5px;
    position: relative;
    transform: translateX(100%);
    left: 135px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    position: initial;
    background: none;
    width: initial;
    height: initial;
    visibility: visible;
    .Close{
      display: none;
    }

    img{
      margin-top: 39px;
    }
  }
`;
