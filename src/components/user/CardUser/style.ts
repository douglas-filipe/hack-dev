import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 300px;
  height: 551px;

  position: relative;

  background-color: #151e29;
  border-radius: 23px;
  font-size: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ::after {
    content: "Seus dados";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 80px;

    background-color: #3f4af1;
    border-radius: 23px 23px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    position: absolute;
    width: 100%;
    height: 25px;
    top: 25px;
    left: -100px;
    z-index: 1;
  }
  .user-box {
    width: 90%;
    height: 350px;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1.1rem;

    div {
      width: 100%;
      align-self: center;
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 723px;
    font-size: 2.25rem;

    .icon {
      height: 30px;
      left: -135px;
    }

    .user-box {
      width: 600px;
      height: 350px;
      font-size: 1.25rem;

      div {
        align-self: flex-end;
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
    }
  }
`;

export const UpdateBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;
