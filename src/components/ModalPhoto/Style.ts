import { styled } from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  display: flex;
  top: 0px;
  left: 0px;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
  width: 100%;
  height: 100%;
  min-width: 300px;

  @media (max-width: 768px) {
    min-width: 300px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    left: 0px;
    top: 0px;
    padding: 0px 10px 0px 5px;
  }

  .modal-container {
    justify-content: center;
    display: flex;
    align-items: center;
    width: 60%;
    height: 80%;
    min-width: 300px;
    animation: myAnim 1s ease 0s 1 normal forwards;

    @keyframes myAnim {
      0% {
        transform: scale(0);
      }

      100% {
        transform: scale(1);
      }
    }
  }
`;

export const MainComponent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  position: absolute;
  top: 0px;
  right: 10px;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
