import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #d3d3d3;
  justify-content: center;
  box-sizing: border-box;

  .div-title {
    justify-content: center;
    width: 100%;
    display: flex;
    padding-top: 30px;

    h2 {
      font-size: 60px;
      font-family: "Montserrat";
      font-weight: bold;
      color: #949494;
    }

    @media (max-width: 768px) {
      padding-top: 30px;
      background-color: #949494;
    }
  }

  > section {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    > .div-foto {
      display: flex;
      width: 45%;
      align-items: flex-end;
      justify-content: center;
      img {
        max-width: 500px;
        width: 100%;
        min-width: 200px;
        @media (max-width: 768px) {
          width: 100%;
        }
      }

      @media (max-width: 768px) {
        min-width: 320px;
        width: 100%;
        align-items: center;
        justify-content: center;
        display: inline-flex;
        background-color: #949494;
      }
    }

    > .div-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 50%;
      padding-top: 30px;

      > h2 {
        text-align: right;
        display: flex;
        font-size: 30px;
        display: flex;
        flex-wrap: wrap;
        color: #949494;
      }

      h5 {
        color: #949494;
        font-size: 30px;
      }

      > p {
        padding-right: 30px;
        font-size: 16px;
        font-family: "Montserrat";
        color: #949494;
        text-align: justify;
        .div-button {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
          width: 100%;

          button {
            border-radius: 5px;
            background-color: #94949494;
            color: white;
            border: none;
            height: 45px;
            font-size: 16px;
            font-weight: bold;
            padding: 5px 15px 5px 15px;
            margin-bottom: 20px;
            cursor: pointer;

            &:hover {
              background-color: #949494;
              cursor: pointer;
            }
          }
        }

        @media (max-width: 768px) {
          padding-right: 0px;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }
      }

      @media (max-width: 768px) {
        padding: 20px 20px 0px 20px;
        align-items: center;
        width: 80%;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding-top: 30px;
    }
  }
`;
