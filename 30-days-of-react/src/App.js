import logo from './logo.svg';
import './App.css';
import React, { useState, Component} from 'react';
import ReactDOM from 'react-dom';
import dogeimg from './images/doge.jpg';
import Uncontrolled from './Uncontrolled';
import { FaBookOpen } from "react-icons/fa";


// Header Component
//Class component is traditional way of creating components
class Header extends Component {
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Learn React
          <FaBookOpen/>
          </h1>
          <h2>Tip: do reading but practical coding is needed</h2>
        </div>
      </header>
    )
  }
}

const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
};

const Form1 = () => (
  <form>
    <label>
      <input type="text" name="username" />
    </label>
    <br />
    <label>
      <input type="password" name="password" />
    </label>
    <br />
    <button type="submit" style={buttonStyles}>
      Submit
    </button>
  </form>
);

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={dogeimg} alt='asabeneh image' />
    <h2>Shiba Inu</h2>
  </div>
);

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript'];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// Main Component
const Main = ({ backgroundColor, onButtonClick }) => (
  <main>
    <div className='main-wrapper' style={{ backgroundColor }}>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <button onClick={onButtonClick}>Change background</button>
    </div>
  </main>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
);

// The App, or the parent or the container component
export const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleButtonClick = () => {
    setBackgroundColor((prevColor) => (prevColor === 'blue' ? 'white' : 'blue'));
  };

  return (
    <div className='app' style={{ backgroundColor }}>
      <Header />
      <Uncontrolled />
      <Main backgroundColor={backgroundColor} onButtonClick={handleButtonClick} /> 
      <Footer />
    </div>
  );
};



