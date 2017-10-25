'use strict'
import {combineReducers} from 'redux';

// HERE IMPORT REDUCERS TO BE COMNBINED
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

// HERE COMBINE THE REDUCERS
export default combineReducers({
    books: booksReducers,
    cart: cartReducers
})