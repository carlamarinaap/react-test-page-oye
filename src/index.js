import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header, Footer } from './App';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Footer/>
  </>
)

