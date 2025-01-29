import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [activeNavbar, setActiveNavbar] = useState("Navbar");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="Navbar">
      <Link to="/">
        <img src={assets.nlogobg} alt="Logo" className="logo" />
      </Link>
      <div className="hallmark">
        <img src={assets.hallmark} alt="Hallmark Logo" />
      </div>
      <ul className="navbar-head">
        <Link
          to="/"
          onClick={() => setActiveNavbar("Home")}
          className={activeNavbar === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#categories"
          onClick={() => setActiveNavbar("Shop now")}
          className={activeNavbar === "Shop now" ? "active" : ""}
        >
          Shop now
        </a>
        <a
          href="#footer"
          onClick={() => setActiveNavbar("Contact us")}
          className={activeNavbar === "Contact us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>

      <div className="navbar-right">
        <img
          onClick={() => setShowLogin(true)}
          src={assets.profile}
          alt="Profile"
        />
        <div className="navbar-wishlist-icon">
          <Link to = "/Wishlist">
            <img src={assets.wishlist} alt="Wishlist" />
          </Link>
          <div className="navbar-cart-icon">
            <Link to="/cart">
              <img src={assets.cart} alt="Cart" />
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
