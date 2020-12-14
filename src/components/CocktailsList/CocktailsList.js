import React from "react";

function CocktailsList() {
  const [data, setData] = React.useState({
    cocktails: ["Whisky", "Vodka", "Manzana", "Get", "Ricard", "Vin"],
  });

  return (
    <main>
      <section className="about">
        <div className="about--title">
          <h1>Hello Mekton96</h1>
        </div>
        <div className="about--text">
          <p>
            Tu as envie de te délecter d'une bonne pinte d'alcool ? 🍹🍺 <br />{" "}
            Fais ton choix !
          </p>
        </div>
      </section>
      <section className="cocktails--list">
        {data.cocktails.map((cocktail, index) => {
					return (
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
							<label className="form-check-label" for="defaultCheck1">
								{cocktail}
							</label>
						</div>
					)
        })}
      </section>
    </main>
  );
}

export default CocktailsList;
