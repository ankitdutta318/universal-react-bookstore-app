'use strict'
// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'

// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// store.subscribe(() => {
//     console.log('Current state is: ', store.getState());
//     // console.log(`id: ${store.getState()[1].id}`);        
// });

import BooksList from './components/pages/booksList';
render(
    <Provider store={store}>
        <BooksList />
    </Provider>, document.getElementById('app')
);

// POST a book
store.dispatch(postBooks(
    [{
        id: 1,
        title: 'This is a book title',
        description: 'This is the book description',
        price: 499.99
    }, 
    {
        id: 2,
        title: 'This is a second book title',
        description: 'This is the second book description',
        price: 325.25
    }]
));

// DELETE a book
store.dispatch(deleteBooks(
    {id: 1}
));

// UPDATE a book
store.dispatch(updateBooks(
    {
        id: 2,
        title: 'Learn React in 24 hours'
    }
));

// --> CART ACTION <--
store.dispatch(addToCart([{id: 1}]));