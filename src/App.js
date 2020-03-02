import React, { Component } from 'react'
import OrderPage from './pages/order/OrderPage'
import OrderContainer from './components/order/OrderContainer'
import KitchenPage from './pages/kitchen/KitchenPage'
import firebase from './utils/firebase'
import crown from './assets/crown.svg'
import back from './assets/left-arrow.svg'

import './App.scss'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menu: false,
      kitchen: false,
      customerName: '',
      breakfastMenu: [],
      lunchMenu: [],
      breakfast: true,
      lunch: false,
      bill: 0,
      newOrder: [],
      nameMenus: ['Desayuno', 'Comida'],
      nameAction: ['Menu', 'Pedido']
    }
  }

  componentDidMount () {
    const lunchRef = firebase.database().ref('comida')
    lunchRef.on('value', (snapshot) => {
      const lunch = snapshot.val()
      this.setState({ lunchMenu: lunch })
    })
    const breakfastRef = firebase.database().ref('desayuno')
    breakfastRef.on('value', (snapshot) => {
      const breakfast = snapshot.val()
      this.setState({ breakfastMenu: breakfast })
    })
  }

  handlerOrder = e => {
    e.preventDefault()
    this.setState({ menu: !this.state.menu })
  };

  handlerKitchen = e => {
    e.preventDefault()
    this.setState({ kitchen: !this.state.kitchen })
  };

  handlerBreakfastMenu = e => {
    e.preventDefault()
    this.setState({
      breakfast: true,
      lunch: false,
      newOrder: [],
      bill: 0
    })
  };

  handlerMenuOrder = e => {
    e.preventDefault()
    this.setState({
      breakfast: false,
      lunch: false,
      newOrder: [],
      bill: 0
    })
  };

  handlerMenuLunch = e => {
    e.preventDefault()
    this.setState({
      breakfast: false,
      lunch: true,
      newOrder: [],
      bill: 0
    })
  };

  addCustomerName = name => {
    this.setState({ customerName: name })
  }

  addItem = item => {
    this.state.newOrder.push(item)
    const amount = this.state.bill + item.price
    this.setState({
      newOrder: this.state.newOrder,
      bill: amount
    })
  };

  deleteItem = item => {
    const i = this.state.newOrder.indexOf(item)
    delete this.state.newOrder[i]
    const amount = this.state.bill - item.price
    this.setState({
      newOrder: this.state.newOrder,
      bill: amount
    })
  };

  Home (handlerOrder, handlerKitchen) {
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
  };

  Header (handlerOrder, handlerKitchen, menu) {
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

  render () {
    const {
      menu,
      kitchen,
      breakfastMenu,
      lunchMenu,
      breakfast,
      lunch,
      newOrder,
      bill
    } = this.state
    return (
      <div className='App'>
        {!menu && !kitchen && (
          this.Home(this.handlerOrder,
            this.handlerKitchen)
        )}
        {(menu || kitchen) && (
          this.Header(this.handlerOrder, this.handlerKitchen, menu)
        )}
        {menu && (
          <OrderPage
            breakfastMenu={breakfastMenu}
            lunchMenu={lunchMenu}
            lunch={lunch}
            handlerBreakfastMenu={this.handlerBreakfastMenu}
            handlerMenuLunch={this.handlerMenuLunch}
            breakfast={breakfast}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
            nameMenus={this.state.nameMenus}
            nameAction={this.state.nameAction}
            handlerMenuOrder={this.handlerMenuOrder}
          />
        )}
        {kitchen && <KitchenPage order={newOrder} />}
        {newOrder.length > 0 && menu && (
          <OrderContainer order={newOrder} deleteItem={this.deleteItem} bill={bill} />
        )}
      </div>
    )
  }
}

export default App
