import React from "react";
import Switch from "@material-ui/core/Switch";
import CocktailsListStyled from "../../style/CocktailsListStyled.style";
import CocktailsOrder from "../../CocktailsOrder/CocktailsOrder";

function CocktailsList() {
  const [data, setData] = React.useState({
    cocktails: ["Whisky", "Vodka", "Manzana", "Get", "Ricard", "Vin"],
    switch: false,
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.checked });
  };

  return (
    <CocktailsListStyled as="main">
      <section className="about">
        <div className="about--title">
          <h1>Hello Mekton96</h1>
          <div className="about--title--switch">
            <Switch
              checked={data.switch}
              onChange={handleChange}
              color="primary"
              name="switch"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <p>{data.switch ? "Barman 🍹" : "A boire ! 🍻"}</p>
          </div>
        </div>
      </section>
      {data.switch ? (
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
            <table className="table table-light table-striped">
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
                    />
                  </th>
                  <td>{cocktail}</td>
                </tr>
              );
            })}
              </tbody>
            </table>
          </section>
          <div className="btn--command mt-5">
            <button className="btn btn-secondary">Commander</button>
          </div>
        </>
      )}
    </CocktailsListStyled>
  );
}

export default CocktailsList;
