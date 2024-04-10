import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables


import "@fontsource/outfit";
import "@fontsource/roboto";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
