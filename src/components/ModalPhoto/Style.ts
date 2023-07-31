import { styled } from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
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
  width: 40%;
`;
