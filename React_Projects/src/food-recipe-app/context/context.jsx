import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
      }
      setSearchParam("");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  console.log(loading, recipeList);

  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSubmit, recipeList, loading }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
