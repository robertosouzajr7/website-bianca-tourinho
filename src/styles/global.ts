import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyled = createGlobalStyle`

`;

export const ContainerStyled = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`;
