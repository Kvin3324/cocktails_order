import axios from "axios";
import React from "react";
import CocktailsOrderStyled from "../../style/CocktailsOrderStyled.style";

function CocktailsOrder() {
  const [data, setData] = React.useState({
    cocktailsOrder: []
  });

  React.useEffect(() => {
    axios.get('http://localhost:1337/orders', {
      headers: {
        Authorization: `Bearer ${sessionStorage.userToken}`
      }
    })
    .then(orders => {
      const newState = {...data};

      orders.data.map((order, index) => {
        const cocktailsNames = order.cocktails.map(cocktail => cocktail.name).toString().split((','));

        newState.cocktailsOrder.push({
          id: order.id,
          name: cocktailsNames,
          quantity: order.cocktails.map(cocktail => cocktail.quantity),
          nickName: [order.clientName]
        })
      })

      return setData(newState);
    })
  }, [])

  return (
    <CocktailsOrderStyled as="div">
      <section className="about">
        <div className="about--text">
          <p>A toi de jouer barman !</p>
        </div>
      </section>
      <section className="cocktails--order--list mt-4">
        <table className="table">
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
                  <th scope="row">
                    {
                      cocktail.quantity.map((q, i) => {
                        return (
                          <p key={i}>
                            {q}
                          </p>
                        )
                      })
                    }
                  </th>
                  <td>
                    {
                      cocktail.name.map((c, i) => {
                        return (
                          <p key={i}>
                            {c}
                          </p>
                        )
                      })
                    }
                  </td>
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
