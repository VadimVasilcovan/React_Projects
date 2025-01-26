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
    let copyFvorite = [...addToFavorite];
    copyFvorite.push(FavoriteItem);
    setAddToFavorite(copyFvorite);
  };

  const HandlingFavoriteState = () => {
    if (setRemoveFavorites !== removeFavorites) {
      setRemoveFavorites(true);
    }
  };

  useEffect(() => {
    HandlingFavoriteState();
  }, [AddToFavoriteFun]);

  const activateDeleteButton = removeFavorites ? "Delete from favorite" : null;

  return (
    <div className="main-ChangeItemLocation-div">
      <div className="information-div">
        {apiData.map((recipes, index) => (
          <ul key={index}>
            <li>{recipes.title}</li>
            <button onClick={() => AddToFavoriteFun(recipes)}>
              Add to favorite
            </button>
          </ul>
        ))}
      </div>
      <div className="information-div">
        {addToFavorite.map((recipes, index) => (
          <ul key={index}>
            <li>{recipes.title}</li>
            <button onClick={() => AddToFavoriteFun(recipes)}>
              {activateDeleteButton}
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
}
