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
    // Create a copy of the favorite list
    let copyFavoriteList = [...addToFavorite];

    // Find if the item already exists in the list
    const index = copyFavoriteList.findIndex((item) => item.id === AddValue.id);

    if (index === -1) {
      // If the item is not in the list, add it
      copyFavoriteList.push(AddValue);
    } else {
      // If the item exists, remove it
      copyFavoriteList.splice(index, 1);
    }

    // Update the state
    SetAddToFavorite(copyFavoriteList);
  };

  const ButtonText = (value) => {
    const index = addToFavorite.findIndex((item) => item.id === value.id);
    return index === -1 ? "Add" : "Delete";
  };

  return (
    <div className="main-ChangeItemLocation-div">
      <div className="information-div">
        {apiResponse.map((recipe, index) => (
          <ul key={index}>
            <li>{recipe.title}</li>
            <button onClick={() => addToFavoriteFun(recipe)}>
              {ButtonText(recipe)}
            </button>
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
