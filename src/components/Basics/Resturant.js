import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"
import Navbar  from './Navbar' 

const uniqueList = [
  ... new Set(Menu.map((CurElem) => {
  return CurElem.category
})),
"All"
]

const Resturant = () => {
    const [menuData , setMenuData] = useState(Menu)
    const [menuList , setmenuList] = useState(uniqueList)
    
    const filterItem =(category) => {

      if(category=== "All") {
        setMenuData(Menu)
        return
      }
      const updatedList = Menu.filter((CurElem) => {
        return CurElem.category === category
      })
      setMenuData(updatedList)
    }
  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
