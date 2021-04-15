import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import variables from "./variables";
import LogginSpace from "./components/LogginSpace/LogginSpace";
import SignUpSpace from "./components/SignUpSpace/SignUpSpace";
import CocktailsList from "./components/CocktailsList/CocktailsList";
import CocktailsOrder from "./components/CocktailsOrder/CocktailsOrder";

function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
  };
  #root {
    overflow-x: hidden;
  };
  `;

  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...variables }}>
        <GlobalStyle></GlobalStyle>
        <Switch>
          <Route exact path="/" component={LogginSpace}></Route>
          <Route exact path="/inscription" component={SignUpSpace}></Route>
          <Route exact path="/cocktailsList/:token" component={CocktailsList}></Route>
          <Route exact path="/cocktailsOrder" component={CocktailsOrder}></Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
