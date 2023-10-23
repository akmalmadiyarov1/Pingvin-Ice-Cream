import React, { useState } from 'react';
import logo from '../../../../public/images/logoi.png';
import Menu from '../../../../public/Icons/Menu';
import { CloseIcon } from '@chakra-ui/icons';

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="navbar-logo">
              <img src={logo} alt="" />
            </div>
            <div className="navbar-links">
              <a href="#">Home</a>
              <a href="#">Product</a>
              <a href="#">Pricing</a>
              <a href="#">Testimonials</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="navbar-button">
              <button>Buy Now</button>
            </div>
            <div className="navbar-burger">
              <button onClick={() => setOpen(!isOpen)}>
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`menu-open ${isOpen ? 'active' : ''}`}>
      <div className="menu-close">
      <button onClick={() => setOpen(!isOpen)}><CloseIcon w={'25px'} h={'30px'}/></button>
      </div>
        <div className="navbar-links1">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
