import './header.scss';

const Header = ({ numItems, total }) => {

    return (
        <header className="shop-header row">
            <a className="logo text-dark" href="#">Book Store</a>
            <a>
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
            </a>
        </header>
    )
};

export default Header;