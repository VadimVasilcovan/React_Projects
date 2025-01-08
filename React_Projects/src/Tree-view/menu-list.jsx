import MenuItem from "./menu-item"



const MenuList = ({list=[]}) => {
    
    return(<div className="menu-list-container">
        {
            list && list.length > 0 ? 
            list.map(listItem => <MenuItem item={listItem}/>)
            : null 
        }
    </div>)
}

export default MenuList