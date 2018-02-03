import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  
  static defaultProps = {
  }

  render() {
    return (
      <header>
        <h1>Reactive Recipes</h1>
        <ul id="menu">
          <li>New Recipe</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </header>
    );
  }
}

export default Navbar;