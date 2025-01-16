import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <>
      <div className="app-container">
        {/* Header */}
        <div className="header">
          <h2>Swetha Tours & Travels</h2>
          <div className="nav-bar">
            <ol>
              <li><a href="">Home</a></li>
              <li><a href="">About us</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Enquiery</a></li>
            </ol>
          </div>
        </div>
        {/* Banner */}
        <div className="banner-section">
          
          <div className="text-area" data-aos="fade-right">
            <span className="color-text">Welcome</span> to <br />
            Swetha <span className="color-text">Tours & Travels...!</span> <br />
            <span className='sentance'><span className='color-text'>your Gateway to</span> Unforgettable Adventures !</span>
          </div>

          <img src="Road trip-rafiki.svg" data-aos="fade-left" alt="" className='logo-image-travel' />
        </div>
        {/* Home */}
        <div className="home-section">
          <p>Discover the world like never before with expertly crafted travel experiences. Whether you're seeking serene escapes, thrilling adventures, or cultural explorations, we’ve got the perfect trip for you.</p>
        </div>
      </div>
    </>
  )
}

export default App
