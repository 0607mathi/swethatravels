import React from 'react'

export const Booking = () => {
  return (
    <>
        <div className="booking-section">
        <div className='headName' data-aos="zoom-in"><span>Booking</span></div>
        {/* select journy date */}
        <div className="date-section" data-aos="zoom-in">
          <div className="origin">
            <span>Origin</span><br />
            <input type="text" placeholder='From'/>
          </div>
          <div className="destination">
            <span>Destination</span> <br />
            <input type="text" placeholder='To'/>
          </div>
          <div className="ownwardsdate">
            <span>Onwards Date</span> <br />
            <input type="date" placeholder='From'/>
          </div>
          <div className="returndate">
            <span>Return Date</span> <br />
            <input type="date" placeholder='From'/>
          </div>
          <button>Book</button>
        </div>
        <div className="vehicles">

          <div className="box crysta"data-aos="fade-right">
              <img src="bannercrysta.png" className='crysta' alt="" />
              <div className=''>
                <h3>Innova Crysta</h3>
                <span>Above 300 Km - Per Km 18rs or <br />else 3500rs Per day + 13rs Per Km </span>
              </div>
              <button>Book</button>
          </div>

          <div className="box etios"data-aos="fade-left">
              <img src="etios.png" className='' alt="" />
              <div className=''>
                <h3>Etios</h3>
                <span>Above 300 Km - Per Km 13rs or <br />else 2000rs Per day + 10rs Per Km </span>
              </div>
              <button>Book</button>
          </div>

          <div className="box swift"data-aos="fade-right">
              <img src="swiftdizer.png" className='' alt="" />
              <div className=''>
                <h3>Swift Dzire</h3>
                <span>Above 300 Km - Per Km 13rs or <br />else 2000rs Per day + 10rs Per Km </span>
              </div>
              <button>Book</button>
          </div>

          <div className="box innova"data-aos="fade-left">
              <img src="innova.png" className='' alt="" />
              <div className=''>
                <h3>Innova</h3>
                <span>Above 300 Km - Per Km 16rs or <br />else 2500rs Per day + 12rs Per Km </span>
              </div>
              <button>Book</button>
          </div>
          
        </div>
        </div>
    </>
  )
}
