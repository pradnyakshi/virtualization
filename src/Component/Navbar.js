import React from 'react';
import '../static/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    const nav = document.querySelector('.nav');
    const displayMenu = () => {
        nav.classList.toggle('active');
        console.log('clicked');
    }
    const removeMenu = () => {
        nav.classList.remove('active');
    }
  return <div>
      <div className="navbar">
          <ul className='nav'>
              <li><Link className='link' onClick={removeMenu} to="/">Home</Link></li>
              <li><Link className='link' onClick={removeMenu} to="/linear">Linear Search</Link></li>
              <li><Link className='link' onClick={removeMenu} to="/binary">Binary Search</Link></li>
              <li><Link className='link' onClick={removeMenu} to="/ratInMaze">Rat In Maze</Link></li>
        </ul>
              <div className='link' id="menu" onClick={displayMenu}><i className="fas fa-bars" id='bar'></i></div>
      </div>
  </div>;
}

export default Navbar;
