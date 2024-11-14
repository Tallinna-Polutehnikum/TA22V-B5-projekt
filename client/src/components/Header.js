import React from 'react'
import logo from '../logo.svg';


function Header() {
  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <span classname="logo">Apollo prj</span>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/movie">Movies</a></li>
          <li><a href="/checkout">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;