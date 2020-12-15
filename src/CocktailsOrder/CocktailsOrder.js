import React from "react";
import CocktailsOrderStyled from "../style/CocktailsOrderStyled.style";

function CocktailsOrder() {
  const [data, setData] = React.useState({
    cocktailsOrder: [
      {
        id: 0,
        name: "Whisky",
        quantity: 2,
        nickName: ["Mathieu"],
      },
      {
        id: 1,
        name: "Vodka",
        quantity: 3,
        nickName: ["Maxime"],
      },
      {
        id: 2,
        name: "Get",
        quantity: 5,
        nickName: ["Pierre"],
      },
      {
        id: 3,
        name: "Cidre",
        quantity: 12,
        nickName: ["Quentin", "Kévin"],
      },
    ],
  });

  return (
    <CocktailsOrderStyled as="div">
      <section className="about">
        <div className="about--text">
          <p>A toi de jouer barman !</p>
        </div>
      </section>
      <section className="cocktails--order--list">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Quantité</th>
              <th>Cocktail</th>
              <th>Pour</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {data.cocktailsOrder.map((cocktail, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{cocktail.quantity}</th>
                  <td>{cocktail.name}</td>
                  <td>{cocktail.nickName.join(", ")}</td>
                  <td><button className="btn btn-secondary">Prêt</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </CocktailsOrderStyled>
  );
}

export default CocktailsOrder;
