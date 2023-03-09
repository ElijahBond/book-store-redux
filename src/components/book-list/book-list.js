import React, { Component } from "react";

import BooksListItem from "../book-list-item/book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from '../hoc/With-bookstore-service';
import { booksLoaded } from "../../actions";
import { bindActionCreators } from "redux";
import compose from "../../utils/compose";

import BookstoreService from "../../services/bookstore-service";

import './book-list.scss';

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService } = this.props;   //  const bookstoreService = new BookstoreService();
        const data = bookstoreService.getBooks();
        console.log(data)

        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;

        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BooksListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

// const mapDispatchToProps = (dispatch) => {

//     return bindActionCreators({booksLoaded}, dispatch)

//     // return {
//     //     booksLoaded: (newBooks) => {
//     //         dispatch(booksLoaded(newBooks))
//     //     }
//     // }
// }

const mapDispatchToProps = { booksLoaded }

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookList);