import styled from "styled-components";
import GlobalContainer from "../utils/GlobalContainer";

const CocktailsOrderStyled = styled(GlobalContainer)`
@media screen and (min-width: 320px) and (max-width: 568px) {
  .cocktails--order--list {
    table {
      table-layout: fixed;
      width: 300px;
    }
  }
}
`;

export default CocktailsOrderStyled;