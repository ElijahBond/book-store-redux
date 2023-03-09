import { Link } from "react-router-dom";
import BookList from '../book-list/book-list';

const HomePage = () => {
    const books = [
        {
            id: 1, 
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler' 
        },
        {
            id: 2, 
            title: 'Release It!',
            author: 'Mihael T. Nygard'
        }
    ];

    return (
        <div>
            This is HomePage

            <Link to="/card">To Card page</Link>
            <BookList books={books} />
        </div>
        
    )
}

export default HomePage;