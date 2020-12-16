import React from 'react'
import Product from './Product';
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>
      
      <div className="home__rows">
          <Product
            title="Ring Alarm 8-piece kit (2nd Gen) – home security system with optional 24/7 professional monitoring – Works with Alexa"
            rating={5}
            price={220}
            image="https://images-na.ssl-images-amazon.com/images/I/51noEXQWrbL._SL1000_.jpg"
        
          />
          
          <Product
            title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant (Pack of 2), White - WYZEC2X2"
            rating={4}
            price={28604}
            image="https://images-na.ssl-images-amazon.com/images/I/61prs9ArY1L._AC_SL1500_.jpg"
        
          />
       
      </div>
      <div className="home__rows">
      <Product
            title="AmazonBasics Computer Speakers for Desktop or Laptop PC | USB-Powered"
            rating={4}
            price={3498}
            image="https://images-na.ssl-images-amazon.com/images/I/91Qr45nRJAL._AC_SL1500_.jpg"
        
          />
      <Product
            title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
            rating={5}
            price={100}
            image="https://images-na.ssl-images-amazon.com/images/I/91JA5-hAnoL._AC_SL1500_.jpg"
        
          />
      <Product
            title='Lenovo IdeaPad 3 14" Laptop, 14.0" FHD 1920 x 1080 Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics, Narrow Bezel, Windows 10, 81W0003QUS, Abyss Blue'
            rating={4}
            price={445}
            image="https://images-na.ssl-images-amazon.com/images/I/71dqjxW8g5L._AC_SL1500_.jpg"
        
          />
       
      </div>
      <div className="home__rows">
      <Product
            title='KeySmart Pro - Key Holder w LED Light & Tile Smart Technology (up to 10 Keys) (Black)'
            rating={3}
            price={85}
            image="https://images-na.ssl-images-amazon.com/images/I/61b6OjVJ2xL._AC_SL1500_.jpg"
        
          />
        </div>
      </div>
    </div>
  )
}

export default Home
