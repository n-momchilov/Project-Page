import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/index.css'; // Optional: Add global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
