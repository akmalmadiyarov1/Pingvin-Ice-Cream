import React from 'react'
import logo from '../../../../public/images/logoi.png'
import faceboook from '../../../../public/images/facebook.png'
import instagramm from '../../../../public/images/instagram.png'
import twitter from '../../../../public/images/twitter.png'
import linkiden from '../../../../public/images/linkedin.png'

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
            <div className="footer-content">
          <img src={logo} alt="" />
          <p>Some food has looked so awful that it's looked like something that the dog's brought home.</p>
          <div className="footer-social">
            <h1>Fllow Us</h1>
            <div className="social">
              <button><img src={faceboook} alt="faceboook" /></button>
              <button><img src={twitter} alt="twitter" /></button>
              <button><img src={instagramm} alt="instagramm" /></button>
              <button><img src={linkiden} alt="linkiden" /></button>
            </div>
          </div>

          <div className="footer-nav-links">
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact Us</a>
          </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer