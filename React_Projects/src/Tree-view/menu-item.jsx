import MenuList from "./menu-list"


const MenuItem = ({item}) => {

    return (<li>
        <p>{item.lable}</p>
        {
            item && item.children && item.children.length > 0 ? 
            <MenuList list={item.children}/>
            : null
        }
    </li>)
}

export default  MenuItem