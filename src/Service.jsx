import React from 'react'

const Service = () => {
  return (
    <>
        <div className="service-section">
          <div className='headName' data-aos="fade-down"><span>Our Services</span></div>
          <div className="ser-box">
            <div className="box" data-aos="fade-right">
              <img src="Study abroad-pana.svg" className='' alt="" />
              <div className=''>
                <h3>Expert Guides</h3>
                <span>Knowledgeable guides to enrich your journey.</span>
              </div>
            </div>

            <div className="box"data-aos="zoom-in">
              <img src="Pina colada-cuate.svg" className='' alt="" />
              <div className=''>
                <h3>Seamless Planning</h3>
                <span>Leave the details to us for a stress-free vacation.</span>
              </div>
            </div>

            <div className="box"data-aos="fade-left">
              <img src="Service 24_7-pana.svg" className='' alt="" />
              <div className=''>
                <h3>24/7 Support</h3>
                <span>We’re here to assist you anytime, anywhere</span>
              </div>
            </div>

            <div className="box"data-aos="fade-right">
              <img src="Road trip-amico.svg" className='' alt="" />
              <div className=''>
                <h3>Favorite Vehicle</h3>
                <span>Choose your Favorite Vechical for your memorable trip.</span>
              </div>
            </div>

            <div className="box"data-aos="zoom-in">
              <img src="Living room-amico.svg" className='' alt="" />
              <div className=''>
                <h3>Tailored Experiences</h3>
                <span>Personalized itineraries designed to suit your preferences.</span>
              </div>
            </div>

            <div className="box"data-aos="fade-left">
              <img src="cruise-rafiki.svg" className='' alt="" />
              <div className=''>
                <h3>Cruise Bookings</h3>
                <span>Explore oceans with our exclusive cruise packages!</span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Service