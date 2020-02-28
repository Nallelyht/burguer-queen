import React, { Component } from 'react'

import crown from '../../assets/crown.svg'

import './Home.scss'

class Home extends Component {
  render () {
    const { handlerOrder, handlerKitchen } = this.props
    return (
      <div className='home'>
        <img className='home-logo' src={crown} alt='logo' />
        <h1 className='home-title'>Burger Queen</h1>
        <div className='home-container'>
          <button
            onClick={handlerOrder}
            className='home-container_button'
          >Pedidos
          </button>
          <button
            onClick={handlerKitchen}
            className='home-container_button'
          >Cocina
          </button>
        </div>
      </div>
    )
  }
}

export default Home
