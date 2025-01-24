import React from 'react'

const DropDown = (props) => {

  return (
    <div className={`dropdown ${props.on}`}>
              <span><a href="">Home</a></span>
              <span><a href="">Services</a></span>
              <span><a href="">Booking</a></span>
              <span><a href="">Contact</a></span>
    </div>
  )
}

export default DropDown