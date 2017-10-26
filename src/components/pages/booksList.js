'use strict'
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Button} from 'react-bootstrap';
import {getBooks} from '../../actions/booksActions';
import {BookItem} from './bookItem';

class BooksList extends React.Component {
    componentDidMount() {
        // Dispatch an action
        this.props.getBooks();
    }
    render() {
        const booksList = this.props.books.map(function(booksArr) {
            return (
                <Col xs={12} sm={6} md={4} key={booksArr.id}>
                    <BookItem/>
                </Col>
            )
        });
        return(
            <Grid>
                <Row style={{marginTop: '15px'}}>
                    {booksList}
                </Row>
            </Grid>
        );
    }
};
function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBooks: getBooks
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);