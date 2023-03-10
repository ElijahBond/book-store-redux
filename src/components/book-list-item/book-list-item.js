import './book-list-item.scss'

const BooksListItem = ({ book, onAddedToCard }) => {
    const {title, author, price, coverImage} = book;

    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={coverImage} alt='some book' />
            </div>
            <div className='book-details'>
                <a href='#' className='book-title'>{title}</a>
                <div className='book-author'>{author}</div>
                <div className='book-price'>${price}</div>
                <button
                    className='btn btn-info add-to-card'
                    onClick={onAddedToCard}
                    >Add to card</button>
            </div>
        </div>
    )
}

export default BooksListItem;