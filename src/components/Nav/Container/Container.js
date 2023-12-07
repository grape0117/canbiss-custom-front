import DrawerNav from "../DrawerNav/DrawerNav";
import NavBrand from "../Nav-Brand/Navbrand";
import { Link, useLocation, useNavigate } from "react-router-dom";
import headersayImg from "../../../assets/images/headersay.png";
import "./Container.css";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import NavLinks from "../Nav-Links/NavLinks";


const Navtop = () => {

  const location = useLocation();
  const [searchBar, SetSearchBar] = useState('invisible');
  
  return (
    <>
      
        <div className="nav__top__container">
          <div className="top__container">
            <NavBrand />
            <div className="bottom__container">
                  
                <ul className="nav">
                  <li className="nav-link">
                    <Link
                      to="/"
                      className={location.pathname === "/" ? "headeractive" : ""}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link
                      to="/about"
                      className={location.pathname === "/about" ? "headeractive" : ""}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link
                      to="/shop"
                      className={location.pathname === "/shop" ? "headeractive" : ""}
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link
                      to="/contact"
                      className={
                        location.pathname === "/contact" ? "headeractive" : ""
                      }
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link
                      to="/login"
                      className={
                        location.pathname === "/login" ? "headeractive" : ""
                      }
                    >
                      My Account
                    </Link>
                  </li>
                  <li className="nav-link" style={{ cursor: 'pointer' }}>
                    <FaSearch
                      style={{ color: "white", fontSize: "20px" }}
                    onClick={() => {
                      console.log("clicked");
                        SetSearchBar('visible');
                      }}
                    />
                    {/* <input type="text" placeholder="Search" className="searchbar" onFocus={() => {searchBar = "visible"}} onBlur={() => {searchBar = "invisible"}}/> */}
                  </li>
                </ul> 
            </div>
            <div className="drawer">
              <DrawerNav />
            </div>
          </div>
        </div> 
        <NavLinks />
    </>
  );
};

export default Navtop;
