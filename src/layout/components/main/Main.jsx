import React from 'react'
import bannerImg from '../../../../public/images/banner.png'
import Car from '../../../../public/Icons/Car'
import Glass from '../../../../public/Icons/Glass'
import Money from '../../../../public/Icons/Money'
import Deliver from '../../../../public/Icons/Deliver'
function Main() {
  return (
 
          <div className="main">
              <div className="main-banner">
              <div className="container">
              <div className="banner">
               <div className="banner-content">
                <p>Sweet fun, full of milk.</p>
                <h1>Feel inside cold with our delicious <span>ice-cream.</span></h1>
                <span>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.</span>
                <button>Buy Now</button>
               </div>
             
               </div>
              </div>

            </div>
        <div className="container">
        <div className="reqommend-cards">
              <div className="cards">
                <Car/>
               <h1>Free Shipping</h1>
               <p>Last Chance! Free shipping on all orders ends today.</p>
              </div>
              <div className="cards">
                <Glass/>
                <h1>Quick Packaging</h1>
                <p>Last Chance! Free shipping on all orders ends today.</p>
              </div>
              <div className="cards">
                <Money/>
                <h1>100% Money Back</h1>
                <p>Last Chance! Free shipping on all orders ends today.</p>
              </div>
              <div className="cards">
                <Deliver/>
                <h1>Fast Delivery</h1>
                <p>Last Chance! Free shipping on all orders ends today.</p>
              </div>
            </div>
        </div>
          </div>
  )
}

export default Main