import { SET_PRODUCTS } from '../actions'

const state = {
  products: []
}

export default function products (state = state, action) {
  const { type, payload } = action
  switch (type) {
    case SET_PRODUCTS:
      return  { ...state, payload }
    default:
      return state
  }
}
