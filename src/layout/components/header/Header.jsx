import React from 'react'
import logo from '../../../../public/images/logoi.png'
function Header() {
  return (
    <div>
          <div className="header">
      <div className="container">
      <div className="navbar">
              <div className="navbar-logo">
                <img src={logo} alt="" />
              </div>
              <div className="navbaar-links">
                  <a href="#" className='active'>Home</a>
                  <a href="#">Product</a>
                  <a href="#">Pricing</a>
                  <a href="#">Testimonials</a>
                  <a href="#">Contact Us</a>
              </div>
              <div className="navbar-button">
                <button>Buy Now</button>
              </div>
            </div>
      </div>
          </div>
    </div>
  )
}

export default Header