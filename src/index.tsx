/**
 * NEXON AI - Main Application Entry Point
 * A powerful AI platform for chat and image generation
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create root element for the application
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the application with StrictMode enabled for better development experience
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
