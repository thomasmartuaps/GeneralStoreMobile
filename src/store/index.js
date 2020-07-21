import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import reducer from './reducers'

const reducer = 1 // Placeholder

const store = createStore(reducer, applyMiddleware(thunk))

export default store 
