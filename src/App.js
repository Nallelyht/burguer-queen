import React, { Component } from 'react'

import Home from './pages/home/Home'
import Header from './components/header/Header'
import OrderPage from './pages/order/OrderPage'
import OrderContainer from './components/order/OrderContainer'
import KitchenPage from './pages/kitchen/KitchenPage'
import firebase from './utils/firebase'

import './App.css'
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
          <Home
            handlerOrder={this.handlerOrder}
            handlerKitchen={this.handlerKitchen}
          />
        )}
        {(menu || kitchen) && (
          <Header
            handlerOrder={this.handlerOrder}
            handlerKitchen={this.handlerKitchen}
            menu={menu}
            addCustomerName={this.addCustomerName}
          />
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
