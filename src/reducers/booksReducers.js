'use strict'

// BOOKS REDUCERS
export function booksReducers(state={books:[]}, action) {
    switch(action.type) {
        case "POST_BOOK": 
        // let books = state.books.concat(action.payload);
        // return {books};
        return {books:[...state.books, ...action.payload]};
        break;

        case "DELETE_BOOK":
        // Create a copy of current array of books
        const currentBookToDelete = [...state.books];
        // Determine at which index in the books array is the book to be deleted
        const indexToDelete = currentBookToDelete.findIndex(
            (book) => {
                return book.id === action.payload.id;
            }
        );
        // Use slice to remove the book at the specified index
        return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]};
        break;

        case "UPDATE_BOOK":
        // Create an array of current array of books
        const currentBookToUpdate = [...state.books];
        // Determine at which index in the book array is the book to be updated
        const indexToUpdate = currentBookToUpdate.findIndex(
            (book) => {
                return book.id === action.payload.id;
            }
        );
        /*  Create a new book object with the new values and with the same array index of the item we want     to replace.
            To achieve this we will use ...spread but we could use concat() method too.
        */
        const newBookToUpdate = {
            ...currentBookToUpdate[indexToUpdate],
            title: action.payload.title
        };
        // This log has the purpose to show you how newBookToUpdate looks like
        console.log('What is it newBookToUpdate: ', newBookToUpdate);
        // Use slice to remove the book at the specified index, replace with the new object and concatinate with the rest of the items in the array
        return {book: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]};
        break;
    }
    return state;
};