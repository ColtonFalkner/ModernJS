'use strict'
if (module.hot) {
  module.hot.accept()
}
// //Importing
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js'
// console.log('Importing module')

// addToCart('bread', 5)
// console.log(price, tq)
// import './shoppingCart.js'
// import * as ShoppingCart from './shoppingCart.js'

// ShoppingCart.addToCart('pepperonis', 56)
// console.log(ShoppingCart.totalPrice)

import add, { cart } from './shoppingCart.js'
add('breads', 6)
add('pizza', 2)
add('apple', 4)

// console.log(cart)

// const shoppingCart2 = (function () {
//   const cart = []
//   const shippingCost = 10
//   const totalPrice = 237
//   const totalQuantity = 23

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity })
//     console.log(`${quantity} ${product} added to cart.`)
//   }

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier.`)
//   }

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   }
// })()

// shoppingCart2.addToCart('apple', 4)
// shoppingCart2.addToCart('pizza', 2)

import cloneDeep from 'lodash'

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
}

const stateClone = Object.assign({}, state)
const stateDeepClone = cloneDeep(state)
console.log(stateClone)
state.user.loggedIn = false
console.log(stateDeepClone)
console.log(state)
