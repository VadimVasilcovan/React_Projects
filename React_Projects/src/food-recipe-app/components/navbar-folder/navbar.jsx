
import { NavLink, Link } from "react-router-dom";


  /*Same folder: import('./Home')
One folder up: import('../Home')
Two folders up: import('../../Home')*/

export default function Navbar() {
 

  return (
    <nav>
        <h2>FoodReceipe</h2>
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
      type='text'
      name='search'
      placeholder="emter Items..."
      className="bg-white/75 p-3 px-8 rounded-full"
      />
    </nav>
  );
}

