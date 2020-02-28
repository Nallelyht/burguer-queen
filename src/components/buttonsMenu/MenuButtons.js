import React, { Component } from 'react'

import breakfast from '../../assets/breakfast.svg'
import lunch from '../../assets/lunch.svg'

import './MenuButtons.scss'

class MenuButtons extends Component {
  render () {
    const { handlerBreakfastMenu, handlerMenuLunch } = this.props
    return (
      <div className='buttons'>
        <button onClick={handlerBreakfastMenu} className='button'>
          <img src={breakfast} alt='breakfast' className='button_img' />
          <p className='button_text'>Desayuno</p>
        </button>
        <button onClick={handlerMenuLunch} className='button'>
          <img src={lunch} alt='lunch' className='button_img' />
          <p className='button_text'>Comida</p>
        </button>
      </div>
    )
  }
}

export default MenuButtons
