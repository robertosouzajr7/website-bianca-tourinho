import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .div-title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 60px;
      color: #949494;
    }

    .div-buttons {
      display: flex;
      gap: 10px;

      > button {
        border-radius: 5px;
        background-color: #949494;
        color: white;
        border: none;
        width: 200px;
        height: 45px;
        font-size: 16px;
        font-weight: bold;
        padding: 5px;
        margin-bottom: 20px;
        cursor: pointer;
        &:hover {
          background-color: #94949494;
        }
      }
    }
  }

  .section-projetos {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    box-sizing: border-box;
    text-align: center;
    min-height: 500px;

    .div-carrosel {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      gap: 5px;
      min-width: 300px;
      max-width: 1080px;
      width: 100%;
      align-items: flex-start;
      justify-content: center;

      .capa-galeria {
        align-items: center;
        justify-content: center;
        min-width: 300px;
        object-fit: cover;
        height: 200px;
        padding: 0;
        width: 350px;

        &:hover {
          background: rgba(108, 108, 108, 0.3337710084033614) 99%;
        }
      }

      @media (max-width: 950px) {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        min-width: 300px;
        gap: 6px;
        border-radius: 6px;
        overflow-x: scroll;
        justify-content: flex-start;
      }
    }

    @media (max-width: 950px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-wrap: none;
      overflow-x: scroll;
      margin-bottom: 20px;
      width: 100%;
      min-width: 300px;
      min-height: 300px;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  width: 100%;
  padding: none;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  cursor: pointer;
  .modal-foto {
    width: 100%;
    opacity: 0.9;

    @media (max-width: 950px) {
      min-width: 300px;
    }
  }

  &:hover {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6287009803921569) 0%,
      rgba(108, 108, 108, 0.3337710084033614) 99%
    );
  }

  @media (max-width: 950px) {
    display: flex;
    justify-content: flex-start;
    object-fit: cover;
  }
`;
