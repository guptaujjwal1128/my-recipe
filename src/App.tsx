import "./App.scss";
import recipeImg from "./assets/images/image-omelette.jpeg";

const data = {
  bannerImage: {
    src: recipeImg,
    alt: "Omelette Recipe",
  },
  title: "Simple Omelette Recipe",
  desc: "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
  prepTime: [
    {
      heading: "Total",
      desc: "Approximately 10 minutes.",
    },
    {
      heading: "Preparation",
      desc: "5 minutes.",
    },
    {
      heading: "Cooking",
      desc: "5 minutes.",
    },
  ],
  ingredients: [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ],
  instructions: [
    {
      heading: "Beat the eggs",
      desc: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      heading: "Heat the pan",
      desc: "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      heading: "Cook the omelette",
      desc: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      heading: "Add fillings (optional)",
      desc: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      heading: "Fold and serve",
      desc: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      heading: "Enjoy",
      desc: "Serve hot, with additional salt and pepper if needed.",
    },
  ],
  nutrition: {
    desc: "The table below shows nutritional values per serving without the additional fillings.",
    items: [
      {
        type: "Calories",
        value: "277 kcal",
      },
      {
        type: "Carbs",
        value: "0g",
      },
      {
        type: "Protein",
        value: "20g",
      },
      {
        type: "Fat",
        value: "22g",
      },
    ],
  },
};

function App() {
  return (
    <main className="recipe">
      <div className="recipe-banner">
        <img
          className="recipe-banner-img"
          src={data.bannerImage.src}
          alt={data.bannerImage.alt}
        />
      </div>
      <div className="recipe-content">
        <h1 className="recipe-content-title">{data.title}</h1>
        <p className="recipe-content-desc">{data.desc}</p>
        <section className="recipe-content-prep-time">
          <h2 className="recipe-content-prep-time-title">Preparation time</h2>
          <ul>
            {data.prepTime.map((item, index) => (
              <li key={index}>
                <strong>{item.heading}:</strong>
                &nbsp; {item.desc}
              </li>
            ))}
          </ul>
        </section>
        <section className="recipe-content-ingredients">
          <h2 className="recipe-content-ingredients-title">Ingredients</h2>
          <ul className="recipe-content-ingredients-list">
            {data.ingredients.map((ingredient, index) => (
              <li key={index} className="recipe-content-ingredients-list-item">
                {ingredient}
              </li>
            ))}
          </ul>
        </section>
        <section className="recipe-content-instructions">
          <h2 className="recipe-content-instructions-title">Instructions</h2>
          <ol className="recipe-content-instructions-list">
            {data.instructions.map((instruction, index) => (
              <li key={index}>
                <strong>{instruction.heading}:</strong>
                &nbsp; {instruction.desc}
              </li>
            ))}
          </ol>
        </section>
        <section className="recipe-content-nutrition">
          <h2 className="recipe-content-nutrition-title">Nutrition</h2>
          <p className="recipe-content-nutrition-desc">{data.nutrition.desc}</p>
          <table className="recipe-content-nutrition-table">
            <tbody>
              {data.nutrition.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}

export default App;
