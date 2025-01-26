import { useState, useEffect } from "react";

export default function ChangeLocation() {
  const [apiData, setApiData] = useState([]);
  const [addToFavorite, setAddToFavorite] = useState([]);
  const [removeFavorites, setRemoveFavorites] = useState(false);


  async function FetchData() {
    try {
      const data = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=apple`
      );
      const result = await data.json();
      setApiData(result.data.recipes);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

 
  const AddToFavoriteFun = (FavoriteItem) => {
    
    if (!addToFavorite.some((item) => item.title === FavoriteItem.title)) {
      setAddToFavorite((prevFavorites) => [...prevFavorites, FavoriteItem]);
    }
  };

  
  const RemoveFromFavoritesFun = (FavoriteItem) => {
    setAddToFavorite((prevFavorites) =>
      prevFavorites.filter((item) => item.title !== FavoriteItem.title)
    );
  };

 
  const toggleFavoriteState = (item) => {
    if (addToFavorite.some((favItem) => favItem.title === item.title)) {
      return "Delete from favorite";
    }
    return "Add to favorite";
  };

  return (
    <div className="main-ChangeItemLocation-div">
      <div className="information-div">
        {apiData.map((recipes, index) => (
          <ul key={index}>
            <li>{recipes.title}</li>
            <button onClick={() => AddToFavoriteFun(recipes)}>
              {toggleFavoriteState(recipes)}
            </button>
          </ul>
        ))}
      </div>
      <div className="information-div">
        <h3>Favorite Recipes</h3>
        {addToFavorite.map((recipes, index) => (
          <ul key={index}>
            <li>{recipes.title}</li>
            <button onClick={() => RemoveFromFavoritesFun(recipes)}>
              Delete from favorite
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
}
