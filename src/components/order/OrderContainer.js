import React, { Component } from 'react'
import trash from '../../assets/trash-can.svg'
import './OrderContainer.scss'

class OrderContainer extends Component {
  render () {
    const { order, deleteItem, bill } = this.props
    return (
      <div className='order-container'>
        <div className='order'>
          {order.map((item) => (
            <div className='order-item' key={item.name}>
              <p className='order-text'>{item.name}</p>
              <button onClick={() => deleteItem(item)}>
                <img src={trash} alt='trash' className='trash' />
              </button>
            </div>
          ))}
        </div>
        <div className='bill'>
          <p>
            <span>Cuenta final</span> <span>{`$${bill}.00`}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default OrderContainer
