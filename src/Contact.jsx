import React from 'react'
import data from './data.json'
export const Contact = () => {
  return (
    <>
        <div className="contact-section" id='contact'>
            <div className="contact-box">
              <h3>Contact</h3>
              
                <span><a href={`mailto:${data.Contact.email}`}>{data.Contact.email}</a></span>
                <span><a href={`tel:${data.Contact.phone1}`}>{data.Contact.phone1}</a></span>
                <span><a href={`tel:${data.Contact.phone2}`}>{data.Contact.phone2}</a></span>
              
            </div>
            <div className="quicklinks">
              <h3>Quick Link</h3>
              
                <span><a href='#home'>Home</a></span>
                <span><a href='#services'>Service</a></span>
                <span><a href='#booking'>Bookings</a></span>
             
            </div>
        </div>
    </>
  )
}
