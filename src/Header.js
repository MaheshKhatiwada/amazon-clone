import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className="header">
        <img
          className="header__logo" src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" alt="">  
        </img>
        <div className="header__search">
          <input className="header__searchInput" type="text"></input>
          <SearchIcon className="header__searchIcon"/>
        </div>
        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionOne">Hello</span>
            <span className="header__optionTwo">Sign In</span>
          </div>
          <div className="header__option">
            <span className="header__optionOne">Return</span>
            <span className="header__optionTwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionOne">Your </span>
            <span className="header__optionTwo">Prime</span>
          </div>
          <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionTwo header__basketCount">0</span>
          </div>     
        </div>
      
    </div>
  )
}

export default Header
