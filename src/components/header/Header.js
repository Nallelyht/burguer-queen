import React, { Component } from 'react'
import crown from '../../assets/crown.svg'
import back from '../../assets/left-arrow.svg'
import './Header.scss'

class Header extends Component {
  render () {
    const { handlerOrder, handlerKitchen, menu } = this.props
    return (
      <header className='header'>
        <button onClick={menu ? handlerOrder : handlerKitchen} className='back_button'>
          <img src={back} alt='back' className='back_button_img' />
        </button>
        <div className='logo'>
          <span className='logo_text'>Burguer Queen</span>
          <img src={crown} alt='crown' className='logo_img' />
        </div>
      </header>
    )
  }
}

export default Header
