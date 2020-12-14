import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import variables from "./variables";
import LogginSpace from "./components/LogginSpace/LogginSpace";
import SignUpSpace from "./components/SignUpSpace/SignUpSpace";

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
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
