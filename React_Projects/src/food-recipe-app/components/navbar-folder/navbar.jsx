import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/context";

/*Same folder: import('./Home')
    One folder up: import('../Home')
    Two folders up: import('../../Home')*/

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  console.log(searchParam)
  return (
    <nav>
      <h2>FoodReceipe</h2>
      <form onSubmit={handleSubmit}></form>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="./Favorites">Favorites</NavLink>
        </li>
        <li>
          <NavLink to="./Details">Details</NavLink>
        </li>
      </ul>
      <input
        type="text"
        name="search"
        placeholder="emter Items..."
        className="bg-white/75 p-3 px-8 rounded-full"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
      />
    </nav>
  );
}
