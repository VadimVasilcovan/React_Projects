import { useEffect, useState } from "react";

export default function DataLocationChange() {
  const [apiResponse, setApiResonse] = useState([]);
  const [addToFavorite, SetAddToFavorite] = useState([]);
  async function fetchData() {
    try {
      const data = await fetch(
        "https://forkify-api.herokuapp.com/api/v2/recipes?search=apple"
      );
      const response = await data.json();
      setApiResonse(response.data.recipes);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addToFavoriteFun = (AddValue) => {
    let copyFavoriteList = [...addToFavorite];
    copyFavoriteList.push(AddValue);
    SetAddToFavorite(copyFavoriteList);
  };
  return (
    <div className="main-ChangeItemLocation-div">
      <div className="information-div">
        {apiResponse.map((recipe, index) => (
          <ul key={index}>
            <li>{recipe.title}</li>
            <button onClick={() => addToFavoriteFun(recipe)}>Add</button>
          </ul>
        ))}
      </div>
      <div className="information-div">
        {addToFavorite.map((recipe, index) => (
          <ul key={index}>
            <li>{recipe.title}</li>
            <button onClick={() => addToFavoriteFun(recipe)}>Delete</button>
          </ul>
        ))}
      </div>
    </div>
  );
}
