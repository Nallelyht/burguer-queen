import React, { Component } from 'react'

import './ListItem.scss'

class ListItem extends Component {
  render () {
    const { item, addItem } = this.props
    return (
      <div className='list-item'>
        <button onClick={() => addItem(item)} className='button-item'>
          <div className='text-menu'>
            <p>{item.name} </p>
            <p>{` $ ${item.price}.00`}</p>
          </div>
        </button>
      </div>
    )
  }
}

export default ListItem
