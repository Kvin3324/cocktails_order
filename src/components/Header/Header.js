import React from "react";
import { Link } from "react-router-dom";
import HeaderStyled from "../../style/HeaderStyled.style";
import menuBurger from "../../img/menu_burger.svg";

function Header() {
  const [data, setData] = React.useState({
    showMenu: false
  });

  function displayMenu() {
    const newState = { ...data };

    newState.showMenu = !newState.showMenu;
    setData(newState);
  }

  return (
    <HeaderStyled>
      <div className="mobile--menu">
        <img
          src={menuBurger}
          alt="burger--icon"
          className="menu--burger"
          onClick={() => displayMenu()}
        />
        {data.showMenu && (
          <div className="menu--options">
            <p>
              <Link to={"/"}>Connexion</Link>
            </p>
            <p>
              <Link to={"/inscription"}>Inscription</Link>
            </p>
          </div>
        )}
      </div>
      <div className="desktop--menu">
        <p className="menu--options--desktop--connexion">
          <Link to={"/"}>Connexion</Link>
        </p>
        <p className="menu--options--desktop--inscription">
          <Link to={"/inscription"}>Inscription</Link>
        </p>
      </div>
    </HeaderStyled>
  );
}

export default Header;