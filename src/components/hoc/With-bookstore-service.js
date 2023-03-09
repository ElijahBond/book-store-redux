import { BookstoreServiceConsumer } from '../bookstore-service-context/Bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
    
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (<Wrapped 
                                    {...props} 
                                    bookstoreService={bookstoreService} 
                                />)
                    }
                }
            </BookstoreServiceConsumer>
        );
    }
};

export  {withBookstoreService};