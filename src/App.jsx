import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Mobile.css';
import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Banner } from './Banner';
import { Home } from './Home';
import { Plan } from './Plan';
import Service from './Service';
import { Booking } from './Booking';
import { Contact } from './Contact';
import { Footer } from './Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  console.log("")

  return (
    <>
      <div className="app-container">
        {/* Header */}
        <Navbar />
        
        {/* Banner */}
        <Banner />
        {/* Home */}
        <Home />
        {/* plan content */}
        <Plan />
        {/* Services */}
        <Service />
        {/* Booking */}
        <Booking />
        {/* Contact */}
        <Contact />
        {/* footer */}
        <Footer />
      </div>
    </>
  )
}

export default App
