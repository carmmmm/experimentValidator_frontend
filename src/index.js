import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new root API for React 18
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store'; // Import your Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped with Redux Provider
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// Optional: Measure performance or log results
reportWebVitals();