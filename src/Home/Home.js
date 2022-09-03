import React from 'react'
import Product from '../Product/Product'
import "./Home.css"


function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img 
          className='home-image'
          src="https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg" 
        />
        
        <div className='home-row top-row'>
          <Product
            title="The Lean Startup"
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._AC_SY780_.jpg"
            price={29.99}
            rating={3}
          />
          <Product
            title="The Great Reset: And the War for the World"
            image="https://m.media-amazon.com/images/I/415tR+XH9NL._AC_SY1000_.jpg"
            price={22.84}
            rating={4}
            />
        </div>
        
        <div className='home-row'>
        <Product 
          title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
          image="https://m.media-amazon.com/images/I/51-uspgqWIL._AC_SY780_.jpg"
          price={24.50}
          rating={5}
        />
        <Product 
          title="The Subtle Art of Not Giving a F*ck:"
          image="https://kbimages1-a.akamaihd.net/f68de379-e763-441c-8159-a949ea575237/1200/1200/False/the-subtle-art-of-not-giving-a-f-ck.jpg"
          price={11.03}
          rating={4}
        />
        <Product 
          title="Think and Grow Rich: The Landmark Bestseller Now Revised and Updated for the 21st Century (Think and Grow Rich Series)"
          image="https://images-na.ssl-images-amazon.com/images/I/718wzK6mymL.jpg"
          price={7.49}
          rating={4}
        />
        </div>

        <div className='home-row'>
          <Product
            title="The 48 Laws of Power"
            image="https://kbimages1-a.akamaihd.net/48827ce4-6c36-4e5b-949a-c642fc566dce/1200/1200/False/the-48-laws-of-power.jpg"
            price={11.60}
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home