import './book-list-item.scss'

const BooksListItem = ({ book }) => {
    const {title, author} = book;

    return (
        <>
        <span>{title}</span>
        <span>{author}</span>
        </>
    )
}

export default BooksListItem;