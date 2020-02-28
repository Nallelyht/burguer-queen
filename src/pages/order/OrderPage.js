import React, { Component } from 'react'

import MenuButtons from '../../components/buttonsMenu/MenuButtons'
import List from '../../components/list/List'

import './OrderPage.scss'

class Menu extends Component {
  render () {
    const {
      breakfastMenu,
      lunchMenu,
      breakfast,
      lunch,
      handlerBreakfastMenu,
      handlerMenuLunch,
      addItem,
      bill,
      nameMenus,
      deleteItem
    } = this.props
    return (
      <div className='menu-container'>
        <h1 className='title'>Menu</h1>
        <MenuButtons
          breakfast={breakfast}
          handlerBreakfastMenu={handlerBreakfastMenu}
          handlerMenuLunch={handlerMenuLunch}
          nameMenu={nameMenus}
        />
        <List
          breakfastMenu={breakfastMenu}
          lunchMenu={lunchMenu}
          breakfast={breakfast}
          lunch={lunch}
          addItem={addItem}
          bill={bill}
          deleteItem={deleteItem}
        />
      </div>
    )
  }
}

export default Menu
