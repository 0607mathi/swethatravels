import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
export const Navbar = () => {

    const [isOn, setIsOn] = useState(false);
  
    const toggleSwitch = () => {
      setIsOn(prevState => !prevState);
    }
    // console.log(isOn);
  return (
    <>
    {/* Header */}
    <div className="header">
          <h2><a href="#header">Sri Swetha Tours & Travels</a></h2>
          <div className="nav-bar">
            <ol>
              <li><a  href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#booking">Booking</a></li>
              <li><a href="#contact">Contact</a></li>
            </ol>
            <button className='menuButton'><TiThMenu onClick={toggleSwitch}/></button>
          </div>
        </div>

        {/* drop down */}
        {isOn?<div className={`dropdown`} data-aos="fade-down">
              <span><a href="#home" onClick={toggleSwitch} >Home</a></span>
              <span><a href="#services" onClick={toggleSwitch} >Services</a></span>
              <span><a href="#booking" onClick={toggleSwitch} >Booking</a></span>
              <span><a href="#contact" onClick={toggleSwitch} >Contact</a></span>
        </div>:''}
    </>
  )
}
