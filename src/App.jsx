import './App.css'
function App() {
  return (
    <>
      <div className="app-container">
        {/* Header */}
        <div className="header">
          <h2>Sri Swetha Travels</h2>
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
          
          <div className="text-area">
            <span className="color-text">Welcome to</span> <br />
            Sri Swetha Travels
          </div>

          <img src="innova-banner-2.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default App
