import { useEffect, useState } from "react";

export default function DataLocationChange() {
  const [apiResponse, setApiResonse] = useState([]);
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
  return (
    <div className="main-ChangeItemLocation-div">
      <div className="information-div">
        {apiResponse.map((recipe, index) => (
          <ul key={index}>
            <li>{recipe.title}</li>
          </ul>
        ))}
      </div>
      <div className="information-div"></div>
    </div>
  );
}
