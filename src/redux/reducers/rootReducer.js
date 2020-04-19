import { combineReducers } from 'redux'
import { catalogReducer } from './catalog-reducer'
import { productsReducer } from './products-reducer'
import { basketReducer } from './basket-reducer'

export default combineReducers({
    catalog: catalogReducer,
    products: productsReducer,
    basket: basketReducer
})
