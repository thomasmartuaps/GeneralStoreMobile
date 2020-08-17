import { combineReducers } from 'redux'
import cart from './cart'
import login from './login'
import products from './products'

export default combineReducers({
  cart,
  login,
  products
})
