import RecipeItem from "../components/recipe-item-folder/recipep-list";
import { GlobalContext } from "../context/context";
import { useContext } from "react";

export default function HomePage() {
  const { recipeList, loading } = useContext(GlobalContext);

  if(loading) return<div>Loading...Please wait!</div>
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      Home
      {recipeList && recipeList.length > 0
        ? recipeList.map((item) => <RecipeItem item={item} />)
        : <div>
          <p className="='lg:text-4xl text-xl text-center text-black font-extrabold">Nothing to show. Please search something</p>
          </div>}
    </div>
  );
}
