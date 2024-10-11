// index.js

// Importing the React library to use JSX and React components
import React from 'react';

// Importing the ReactDOM library to render the React component into the DOM
import ReactDOM from 'react-dom/client';

// Importing the main App component which serves as the root component of the application
import App from './App';

// Importing global styles for the application
import './styles.css';

// Creating the root DOM node where the React application will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside React's StrictMode, which helps in identifying potential issues
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);