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
          <h2>Sri Swetha Tours & Travels</h2>
          <div className="nav-bar">
            <ol>
              <li><a href="">Home</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Booking</a></li>
              <li><a href="">Contact</a></li>
            </ol>
            <button className='menuButton'><TiThMenu onClick={toggleSwitch}/></button>
          </div>
        </div>

        {/* drop down */}
        {isOn?<div className={`dropdown`} data-aos="fade-down">
              <span><a href="">Home</a></span>
              <span><a href="">Services</a></span>
              <span><a href="">Booking</a></span>
              <span><a href="">Contact</a></span>
        </div>:''}
    </>
  )
}
