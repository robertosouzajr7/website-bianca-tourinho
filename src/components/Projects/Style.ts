import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: "white";
  justify-content: center;
  align-items: center;

  .div-title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 60px;
      color: #949494;
    }
  }

  .section-projetos {
    display: flex;
    align-items: center;
    justify-content: center;

    .div-carrosel {
      display: flex;
      gap: 5px;
      width: 60%;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .capa-galeria {
        align-items: center;
        justify-content: center;
        max-width: 200px;
        max-height: 200px;
        width: 100%;
        object-fit: cover;

        &:hover {
          background: rgba(108, 108, 108, 0.3337710084033614) 99%;
        }
      }
    }

    @media (max-width: 950px) {
      display: flex;
      flex-direction: column;
      flex-wrap: none;
      width: 100%;
    }
  }
`;

export const Cards = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }

  &:hover {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6287009803921569) 0%,
      rgba(108, 108, 108, 0.3337710084033614) 99%
    );
  }
`;
