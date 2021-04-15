import styled from "styled-components";
import GlobalContainer from "../utils/GlobalContainer";

const CocktailsOrderStyled = styled(GlobalContainer)`
@media screen and (min-width: 320px) and (max-width: 568px) {
  .cocktails--order--list {
    table {
      table-layout: fixed;
      width: 300px;
      td {
        border-right: 1px solid #dee2e6;
        border-left: 1px solid #dee2e6;
      }
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 667px) {
  .cocktails--order--list {
    table {
      width: 100%;
      td {
        border-right: 1px solid #dee2e6;
        border-left: 1px solid #dee2e6;
      }
    }
  }
}
`;

export default CocktailsOrderStyled;