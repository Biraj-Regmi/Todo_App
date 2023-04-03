import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  const navigation = useNavigate();
  return (
    <div>
        <ul>
  <li><a className="active" href="#home">Home</a></li>
  <li><ul href="#news">Rooms</ul></li>
  <li><ul href="#contact">Contact</ul></li>
  <li><ul href="#about">About Hotel</ul></li>
</ul>
    </div>
  )
}

export default Navbar