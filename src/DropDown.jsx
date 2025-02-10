import React from 'react'

const DropDown = (props) => {

  return (
    <div className={`dropdown ${props.on}`}>
              <span><a href="#home">Home</a></span>
              <span><a href="#services">Services</a></span>
              <span><a href="#booking">Booking</a></span>
              <span><a href="#contact">Contact</a></span>
    </div>
  )
}

export default DropDown