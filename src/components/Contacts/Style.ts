import { styled } from "styled-components";

export const DivStyledMap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .div-contact {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #949494;

    > h2 {
      font-size: 30px;
      font-family: "Montserrat";
      color: #949494;
    }
    .div-phones {
      display: flex;
      width: 60%;
      justify-content: center;
      align-items: center;
      font-family: "Monteserrat";
      gap: 20px;

      @media (max-width: 790px) {
        display: flex;
        flex-wrap: wrap;
      }

      > h2 {
        font-size: 30px;
        font-family: "Montserrat";
        color: #949494;
        gap: 15px;
        align-items: center;
      }

      > span {
        align-items: center;
        font-family: "Montserrat";

        svg {
          size: 40px;
          margin-right: 10px;
        }
      }
    }
  }

  .div-adress {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-size: 30px;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 5px;

      > p {
        font-size: 18px;
        text-align: center;
      }

      @media (max-width: 790px) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 5px;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .divMap {
    width: 100%;
    height: 400px;
    border: none;
  }
`;
