import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header() {

  const [{basket}, dispatch] = useStateValue()

  return (
    <div className='header'>
      <div className='header-top'>
      <Link to="/">
      <img 
        className='header-logo' 
        src='https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png'
      />
      </Link>
        <div className='header-left'>
          
          <div className='header-location'>
            <LocationOnIcon/>
            <div className='header-location-deliver' >
              <span className='header-optionLine1'> Deliver to</span>
              <span className='header-optionLine2'> Turkey</span>
            </div>
          </div>
        </div>
        

        <div className='header-search'>
          <input className='header-searchInput' type="text" />
          <SearchIcon className="header-searchIcon" />
        </div>
  
        <div className='header-nav'>
          <div className="header-option">
            <span className='header-optionLine1'> Hello, sign in</span>
            <span className='header-optionLine2'> Accounts & Lists</span>
          </div>

          <div className="header-option">
            <span className='header-optionLine1'> Returns</span>
            <span className='header-optionLine2'> & Orders</span>
          </div>

          <div className="header-option">
            <span className='header-optionLine1'> Your</span>
            <span className='header-optionLine2'> Prime</span>
          </div>


          <Link to="/checkout">
            <div className="header-optionBasket">
              <ShoppingCartIcon/>
              <span className='header-optionLine2 header-basketCount'>{basket.length}</span>
            </div>
          </Link>
          
        </div>

      </div>
      <div className='header-bottom'>
        <div className='header-bottom-left'>
          <DehazeIcon/>
          <span>All</span>
        </div>
        <div className='header-bottom-right'>
          <span className='header-bottom-right-text'>Today's Deals</span>
          <span className='header-bottom-right-text'>Customer Service</span>
          <span className='header-bottom-right-text'>Registry</span>
          <span className='header-bottom-right-text'>Gift Cards</span>
          <span className='header-bottom-right-text'>Sell</span>

        </div>
      </div>    
    </div>
  )
}

export default Header