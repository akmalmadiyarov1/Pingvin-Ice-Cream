import React from 'react'
import logo from '../../../../public/images/Logo.png'
function Header() {
  return (
    <div>
        <div className="header">
          <div className="container">
        <div className="navbar">
          <div className="header-logo">
                <img src={logo} alt="" />
            </div>
            <div className="header-links">
                  <a href="#">Home</a>
                  <a href="#">Location</a>
                  <a href="#">Blog</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
            </div>
            <div className="header-button">
                    <button>
                    Booking now
                    </button>
            </div>
</div>

<div className="banner-content">
  <h1>Railtrips To Here, There And Everywhere!</h1>
  <h2>We all wish to start our year the best way possible and also according to a common belief if you have a great start to your.</h2>
  <button>Explore more</button>
</div>
</div>
        </div>

    </div>
  )
}

export default Header