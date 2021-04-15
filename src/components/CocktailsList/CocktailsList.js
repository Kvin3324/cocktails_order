import React from "react";
import axios from "axios";
import Switch from "@material-ui/core/Switch";
import CocktailsListStyled from "../../style/CocktailsListStyled.style";
import CocktailsOrder from "../CocktailsOrder/CocktailsOrder";

function CocktailsList() {
  const [data, setData] = React.useState({
    cocktails: [],
    switchBtn: false,
    command: [{
      clientName: sessionStorage.username,
      cocktails: []
    }]
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.checked });
  };

  React.useEffect(() => {
    axios.get('http://localhost:1337/cocktails-lists', {
      headers: {
        Authorization: `Bearer ${sessionStorage.userToken}`
      },
    })
    .then(response => {
      const newState = {...data};

      newState.cocktails = response.data[0].list_cocktails;
      newState.switchBtn = false;
      return setData(newState);
    })
  }, [])

  function createItemsOrder(e, cocktail) {
    const newState = {...data};

    if (e.target.value > 0) {
      console.log(cocktail);
      newState.command[0].cocktails.push({name: cocktail.name, quantity: e.target.value, recipe: cocktail.description});
    }

    return setData(newState);
  }

  function createOrder(e) {
    e.preventDefault();

    axios.post('http://localhost:1337/orders', {
      clientName: data.command[0].clientName,
      cocktails: data.command[0].cocktails,
      headers: {
        Authorization: `${sessionStorage.userToken}`,
      },
    })
    .then(response => console.log(response))
    .catch((error) => console.log(error));
  }

  return (
    <CocktailsListStyled as="main">
      <section className="about">
        <div className="about--title">
          <h1>Hello {sessionStorage.username}</h1>
          <div className="about--title--switch">
            <Switch
              checked={data.switchBtn}
              onChange={handleChange}
              color="primary"
              name="switchBtn"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <p>{data.switchBtn ? "Barman 🍹" : "A boire ! 🍻"}</p>
          </div>
        </div>
      </section>
      {data.switchBtn ? (
        <CocktailsOrder></CocktailsOrder>
      ) : (
        <>
          <div className="about--text">
            <p>
              Tu as envie de te délecter d'une bonne pinte d'alcool ? 🍹🍺{" "}
              <br /> Fais ton choix !
            </p>
          </div>
          <section className="cocktails--list">
            <table className="table">
              <thead>
                <tr>
                  <th>Quantité</th>
                  <th>Cocktail</th>
                </tr>
              </thead>
              <tbody>
              {data.cocktails.map((cocktail, index) => {
              return (
                <tr key={index}>
                  <th>
                    <input
                      type="number"
                      style={{width: "10vw"}}
                      onBlur={(e) => createItemsOrder(e, cocktail)}
                    />
                  </th>
                  <td id={index}>{cocktail.name}</td>
                </tr>
              );
            })}
              </tbody>
            </table>
          </section>
          <div className="btn--command mt-5">
            <button className="btn btn-secondary" onClick={createOrder}>Commander</button>
          </div>
        </>
      )}
    </CocktailsListStyled>
  );
}

export default CocktailsList;
