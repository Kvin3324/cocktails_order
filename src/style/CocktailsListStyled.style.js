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
    .form-check {
      label {
        font-family: "Nunito";
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 568px) {
    .about--text {
      margin: 10px 0;
    }
  }
`;

export default CocktailsListStyled;