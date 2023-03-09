import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/App';
import ErrorBoundary from './components/error-boundary/Error-boundary';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context/Bookstore-service-context';
import store from './store';

const bookstoreService = new BookstoreService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>
);