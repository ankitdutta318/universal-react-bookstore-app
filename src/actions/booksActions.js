'use strict'

// GET A BOOK
export function getBooks(book) {
    return {
        type: "GET_BOOK", 
    }
};

// POST A BOOK
export function postBooks(book) {
    return {
        type: "POST_BOOK", 
        payload: book
    }
};

// DELETE A BOOK
export function deleteBooks(title) {
    return {
        type: "DELETE_BOOK",
        payload: title
    }
};

// UPDATE A BOOK
export function updateBooks(book) {
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}