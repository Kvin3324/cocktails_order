import styled from "styled-components";
import GlobalContainer from "../utils/GlobalContainer";

const CocktailsListStyled = styled(GlobalContainer)`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  .about {
    padding: 0 8px;
    .about--title {
      display: flex;
      align-items: center;
      h1 {
        font-size: 1.3em;
        margin: 0;
        font-family: "Roboto";
      }
      .about--title--switch {
        display: flex;
        align-items: center;
        p {
          margin: 0;
        }
      }
    }
  }
  .cocktails--list {
   input {
    font-weight: 200;
    border: none;
    background-color: #F9E4DF;
    color: black;
    font-family: "Nunito";
      &:focus {
        outline: none;
      }
   }
  }

  button {
    background-color: #F9E4DF;
    color: black;
    border: none;
    font-family: "Roboto";
    font-weight: bold;
  }

  @media screen and (min-width: 320px) and (max-width: 568px) {
    .about--text {
      margin: 10px 0;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 667px) {
    .about {
      .about--title {
        justify-content: space-between;
      }
    }
    .about--text {
      p {
        margin: 0 7px;
      }
    }
    .cocktails--list, .btn--command {
      margin: 0 7px;
    }
  }
`;

export default CocktailsListStyled;