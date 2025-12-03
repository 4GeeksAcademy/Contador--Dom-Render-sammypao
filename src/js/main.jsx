import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';


let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  
  root.render(<SecondsCounter seconds={counter} />);
  
  counter++;
  
}, 1000);


