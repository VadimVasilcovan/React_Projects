import MenuList from "./menu-list";
import menus from "./data";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
