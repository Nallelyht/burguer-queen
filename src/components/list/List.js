import React, { Component } from 'react'

import ListItem from './ListItem'

import './List.scss'

class List extends Component {
  render () {
    const {
      breakfastMenu,
      breakfast,
      lunch,
      lunchMenu,
      addItem,
      bill,
      deleteItem
    } = this.props
    return (
      <div className='list-container'>
        <div className='list'>
          {((breakfast && !lunch) ? breakfastMenu : lunchMenu).map(item => (
            <ListItem
              item={item}
              key={item.name}
              addItem={addItem}
              breakfast={breakfast}
              bill={bill}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default List
