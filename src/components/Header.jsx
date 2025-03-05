import React, { useState, useEffect } from "react";
import "../css/Header.css";
import { FaCaretDown } from "react-icons/fa";
import DropdownMenu from "../ui/DropdownMenu";
import { Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Function to scroll to the section after navigation
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      scroller.scrollTo(hash.replace("#", ""), {
        duration: 500,
        smooth: true,
      });
    }
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const menuItems = [
    { label: "Bridging Finance", link: "/bridging-finance#steps-row" },
    { label: "Buy to Let", link: "/buy-to-let#steps-row" },
    { label: "Residential Mortgages", link: "/residential-mortgages#steps-row" },
    { label: "Commercial Mortgages", link: "/commercial-mortgages#steps-row" },
  ];

  return (
    <header className="header">
      <div className="container">
        <Link className="logo" to="/">The Lending Company</Link>
        <div 
          className={`toggle-btn ${menuOpen ? "toggle-open" : ""}`} 
          onClick={toggleMenu}
        ></div>
        <nav className={menuOpen ? "nav nav-show" : "nav"}>
          <ul>
            <li>
              <DropdownMenu
                icon={<FaCaretDown />}
                menuItems={menuItems}
                selectText="Services"
                className="custom-dropdown"
                onMenuItemClick={closeMenu}
              />
            </li>
            <li><Link to="/" className="nav-link-item" onClick={closeMenu}>About</Link></li>
            <li><Link to="/" className="nav-link-item" onClick={closeMenu}>Blogs</Link></li>
            <li><Link to="/" className="nav-link-item" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
        <div className="btn-wrapper dmb">
          <Link to="/configure" className="primary-btn">Get Started</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
