import './App.css';
import React, { useState, Component} from 'react';
import ReactDOM from 'react-dom';
import dogeimg from './images/doge.jpg';
import Uncontrolled from './Uncontrolled';
import { FaBookOpen } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import {Contact} from './Contact'
import {Home} from './Home'
import {Navbar} from './Navbar'
import {Facts} from './Facts'



// The App, or the parent or the container component
export const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleButtonClick = () => {
    setBackgroundColor((prevColor) => (prevColor === 'blue' ? 'white' : 'blue'));
  };

  return (
    <div className='app' style={{ backgroundColor }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/contact" element = {<Contact/>} />
          <Route path = "/facts" element = {<Facts/>} />
          <Route path = "*" element = {<h1> Page not found </h1>} />
        </Routes>
      </Router>
    </div>
  );
};



