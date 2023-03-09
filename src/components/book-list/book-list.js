import React, { Component } from "react";
import BooksListItem from "../book-list-item/book-list-item";

import './book-list.scss';

class BookList extends Component {

    render() {
        const { books } = this.props;

        return (
            <ul>
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
}

export default BookList;