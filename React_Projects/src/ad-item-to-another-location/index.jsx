import { useEffect, useState } from "react";
import "../ad-item-to-another-location/style.css";

export default function ChangeItemLocation() {
  const [apiResult, setApiResult] = useState([]);
  const [addToFavorites, setAddTofavorites] = useState([]);

  async function FetchItems() {
    try {
      const data = await fetch(
        "https://forkify-api.herokuapp.com/api/v2/recipes?search=apple"
      );
      const result = await data.json();
      setApiResult(result.data.recipes);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    FetchItems();
  }, []);

  function handleAddToFavorites(getCurrentItem) {
    let copyFavoriteList = [...addToFavorites];
    copyFavoriteList.push(getCurrentItem);
    setAddTofavorites(copyFavoriteList);
  }

  return (
    <div className="main-ChangeItemLocation-div">
      <div className="information-div">
        <h1>List of recipes</h1>
        {apiResult.map((recipeData, index) => (
          <ul key={index}>
            <li>{recipeData.title}</li>
            <button onClick={() => handleAddToFavorites(recipeData)}>
              Add to favorite
            </button>
          </ul>
        ))}
      </div>
      <div className="information-div">
        <h1>Favorite recipes</h1>
        {addToFavorites.map((recipeData, index) => (
          <ul key={index}>
            <li>{recipeData.title}</li>
            <button onClick={() => handleAddToFavorites(recipeData)}>
              Add to favorite
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
}
