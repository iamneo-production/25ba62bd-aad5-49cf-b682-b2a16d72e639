import React from 'react';
import logo from './/images/logo.png';
import './Navbar.css';


export default function Navbar() {
  return (
    <div>
       <div class="topnav">
      <img src={logo}  alt="" href="/"/>
        <a href="/Profile">Profile</a>
        <a href="/Login">Login</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/help">Help</a>
        <a class="active" href="/">Home</a><hr/>
      </div>
    </div>
  )
}
