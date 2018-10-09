import React, { Component } from 'react';
import logo from './imagenes/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>Hello Word React</h2>
        </div>
      </div>
    );
  }
}

export default Header;
