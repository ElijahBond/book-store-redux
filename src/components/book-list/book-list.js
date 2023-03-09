import React, { Component } from "react";

import BooksListItem from "../book-list-item/book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from '../hoc/With-bookstore-service';
import { fetchBooks, bookAddedToCard } from "../../actions";
import { bindActionCreators } from "redux";
import compose from "../../utils/compose";
import Spinner from '../spinner/Spinner';
import ErrorIndicator from "../error-indicator/Error-indicator";

import BookstoreService from "../../services/bookstore-service";

import './book-list.scss';

const BookList = ({ books, onAddedToCard }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BooksListItem 
                                book={book}
                                onAddedToCard={() => onAddedToCard(book.id)} />
                        </li>
                    )
                })
            }
        </ul>
    )
};

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCard } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList 
                    books={books}
                    onAddedToCard={onAddedToCard} />;
    }
};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;

    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCard: (id) => dispatch(bookAddedToCard(id))
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookListContainer);