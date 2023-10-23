import React from "react";
import AboutImg from "../../../../public/images/aboutImg.png";
import product from "../../../../public/images/product1.png";
import product2 from "../../../../public/images/product2.png";
import product3 from "../../../../public/images/product4.png";
import Money from '../../../../public/Icons/img/Money.png'
import Car from '../../../../public/Icons/img/Car.png'
import Deli from '../../../../public/Icons/img/Deliver.png'
import Glass from '../../../../public/Icons/img/Glass.png'

function Main() {
  return (
    <div className="main">
      <div className="main-banner">
        <div className="container">
          <div className="banner">
            <div className="banner-content">
              <p>Sweet fun, full of milk.</p>
              <h1>
                Feel inside cold with our delicious <span>ice-cream.</span>
              </h1>
              <span>
                Some food has looked so awful that it's looked like something
                that the dog's brought home, yet after one mouthful I've been
                left eating my thoughts, my words.
              </span>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="reqommend-cards">
     <div className="c"> 
      <div className="a">
       <div className="cards">
            <img src={Car}alt="" />
            <h1>Free Shipping</h1>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
          <div className="cards">
            <img src={Glass} alt="" />
            <h1>Quick Packaging</h1>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
       </div>
      <div className="b">
      <div className="cards">
            <img src={Money} alt="" />
            <h1>100% Money Back</h1>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
          <div className="cards">
            <img src={Deli} alt="" />
            <h1>Fast Delivery</h1>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
      </div></div>
        </div>
      </div>

      <div className="about-ice-cream">
        <div className="container">
          <div className="about-ice">
            <div className="about-content">
              <h1>Brown Sugar Oatmea</h1>
              <p>
                Together with McDonald’s, Burger King has grown to become
                synonymous with burgers in the US.Together with McDonald’s,
                Burger King has grown to become synonymous.
              </p>
              <button>See Details</button>
            </div>
            <div className="about-img">
              <img src={AboutImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="products">
        <h1 className="our-product-name">Our Product</h1>

        <div className="container">
          <div className="product-our-content">
            <div className="our-product">
              <div className="product-img">
                <img src={product} alt="" />
              </div>
              <div className="product-content">
                <h1>Brown bread</h1>
                <h2>
                  Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                  Pain is a pioneer in the healthy fast food scene.Bon Au Pain
                  is a pioneer in the healthy fast food scene.
                </h2>
                <p>$????</p>
              </div>
            </div>
            <div className="our-product2">
              <div className="product-img">
                <img src={product2} alt="" />
              </div>
              <div className="product-content">
                <h1>Brown bread</h1>
                <h2>
                  Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                  Pain is a pioneer in the healthy fast food scene.Bon Au Pain
                  is a pioneer in the healthy fast food scene.
                </h2>
                <p>$????</p>
              </div>
            </div>
            <div className="our-product">
              <div className="product-img">
                <img src={product3} alt="" />
              </div>
              <div className="product-content">
                <h1>Brown bread</h1>
                <h2>
                  Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                  Pain is a pioneer in the healthy fast food scene.Bon Au Pain
                  is a pioneer in the healthy fast food scene.
                </h2>
                <p>$????</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="container">
    <div className="lets-talk">
        <h1>Have Question in Mind? Let us help you</h1>
        <div className="talk-inputs">
          <input type="text" placeholder="Enter your question" />
          <button>Send</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Main;
