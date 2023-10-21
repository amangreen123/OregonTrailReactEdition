import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

// this is the new way to render in React 18
//this is the root of the app
//it renders the app component
//it is wrapped in a BrowserRouter component

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
 <BrowserRouter>
     <App />

 </BrowserRouter>
);


