import { styled } from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  display: flex;
  top: 40px;
  left: 25%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.7);

  z-index: 5;

  .modal-container {
    justify-content: center;
    display: flex;
    align-items: center;
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
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
`;
