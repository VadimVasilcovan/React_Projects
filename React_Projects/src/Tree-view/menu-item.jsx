import { useState } from "react";
import MenuList from "./menu-list";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentlabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  };
  return (
    <li>
      <div>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>{
            displayCurrentChildren[item.label] ? '-' : '+'
          }</span>
        ) : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
