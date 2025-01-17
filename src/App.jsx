import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <>
      <div className="app-container">
        {/* Header */}
        <div className="header">
          <h2>Sri Swetha Tours & Travels</h2>
          <div className="nav-bar">
            <ol>
              <li><a href="">Home</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Booking</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Enquiery</a></li>
            </ol>
          </div>
        </div>
        {/* Banner */}
        <div className="banner-section">
          
          <div className="text-area" data-aos="fade-right">
            <span className="color-text">Welcome</span> to <br />
            Sri Swetha <span className="color-text">Tours & Travels...!</span> <br />
            <span className='sentance'><span className='color-text'>your Gateway to</span> Unforgettable Adventures !</span>
          </div>

          <img src="Road trip-rafiki.svg" data-aos="fade-left" alt="" className='logo-image-travel' />
        </div>
        {/* Home */}
        <div className="home-section">
          <div className='headName'><span>Home</span></div>
          <div className=''>
            <img src="Study abroad-rafiki.svg" data-aos="fade-right" className='' alt="" />
            <p className='' data-aos="fade-left">Discover the world like never before with expertly crafted travel experiences. Whether you're seeking serene escapes, thrilling adventures, or cultural explorations, we’ve got the perfect trip for you.</p>
          </div>
        </div>
        {/* plan content */}
        <div className='plan-content' data-aos="fade-down">
            <h3>Plan your Next Journey Today..!</h3>
            <p>Let’s make your travel dreams come true. Browse our tours, customize your package, or get in touch for a consultation.</p>
            <button><a href="#">Book your trip</a></button>
        </div>
        {/* Services */}
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
        {/* Booking */}
        <div className="booking-section">
        <div className='headName' data-aos="fade-down"><span>Booking</span></div>
        {/* select journy date */}
        <div className="date-section">
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

          <div className="box crysta"data-aos="zoom-in">
              <img src="bannercrysta.png" className='crysta' alt="" />
              <div className=''>
                <h3>Innova Crysta</h3>
                <span>Above 300 Km - Per Km 18rs or <br />else 3500rs Per day + 13rs Per Km </span>
              </div>
              <button>Book</button>
          </div>

          <div className="box etios"data-aos="zoom-in">
              <img src="etios.png" className='' alt="" />
              <div className=''>
                <h3>Etios</h3>
                <span>Above 300 Km - Per Km 13rs or <br />else 2000rs Per day + 10rs Per Km </span>
              </div>
              <button>Book</button>
          </div>

          <div className="box swift"data-aos="zoom-in">
              <img src="swiftdizer.png" className='' alt="" />
              <div className=''>
                <h3>Swift Dzire</h3>
                <span>Above 300 Km - Per Km 13rs or <br />else 2000rs Per day + 10rs Per Km </span>
              </div>
              <button>Book</button>
          </div>

          <div className="box innova"data-aos="zoom-in">
              <img src="innova.png" className='' alt="" />
              <div className=''>
                <h3>Innova</h3>
                <span>Above 300 Km - Per Km 16rs or <br />else 2500rs Per day + 12rs Per Km </span>
              </div>
              <button>Book</button>
          </div>
          
        </div>
        </div>
      </div>
    </>
  )
}

export default App
