import { SET_PRODUCTS } from '../actions'

const state = {
  cart: []
}

export default function cart (state = state, action) {
  const { type, payload } = action
  switch (type) {
    case SET_PRODUCTS:
      return  { ...state, payload }
    default:
      return null
  }
}
