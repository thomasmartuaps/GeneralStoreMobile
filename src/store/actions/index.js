import axios from 'axios'

const url = 'https://generalstore-server-90210.herokuapp.com'

// Products

export const SET_PRODUCTS = 'SET_PRODUCTS'

export function setProducts (products) {
  return {
    type: SET_PRODUCTS,
    payload: products
  }
}

export function fetchProducts () {
  return ((dispatch) => {
    axios({
      method: 'GET',
      url: url + '/product'
    })
  
      .then(response => {
        console.log(response.data)
        console.log('fetched from server')
        dispatch(setProducts(response.data))
      })
  
      .catch(err => {
        console.log(err)
      })
  })
  
}

// Cart

// Login
