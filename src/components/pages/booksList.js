'use strict'
import React from 'react';
import {connect} from 'react-redux';

class BooksList extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello React!</h1>
            </div>
        );
    }
};
function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}
export default connect(mapStateToProps)(BooksList);