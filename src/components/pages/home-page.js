import { Link } from "react-router-dom";
import BookList from '../book-list/book-list';
import ShoppingCartTable from "../shoppingCartTable/ShoppingCartTable";

const HomePage = () => {

    return (
        <div>
            This is HomePage

            <Link to="/card">To Card page</Link>
            <BookList />
            <ShoppingCartTable />
        </div>
        
    )
}

export default HomePage;