import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <header>
        <div className="h-container">
          <div className="logo">
            <div className="logo-1">
              <img
                src="https://citycomputer.mn/wp-content/uploads/2022/04/logo-1.png"
                alt="image"
              />
            </div>
          </div>
          <div className="search">
            <div className="search-1">
              <div className="search-2">
                <input type="search" placeholder="Хайх утгаа оруулна уу?" />
              </div>
              <div className="search-i">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className="h-icon">
            <div className="profile">
              <div className="wishlist">
                <div className="wishlist-h">
                  <h1 className="roboto">Хүслийн жагсаалт</h1>
                </div>
                <div className="w-i">
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>
              <div className="sags">
                <div className="sags-1">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
              <div className="me">
                <div className="me-1">
                  <i className="fa-solid fa-user"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-2">
        <div className="h2-container">
          <div className="menu">
            <div className="menu-i">
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="menus">
              <ul className="menus-ul roboto">
                <li>
                  <a href="/">Нүүр</a>
                </li>
                <li>
                  <Link to="/test">Test</Link>
                </li>
                <li>
                  <a href="/">Нүүр</a>
                </li>
                <li>
                  <a href="/">Нүүр</a>
                </li>
                <li>
                  <a href="/">Нүүр</a>
                </li>
                <li>
                  <a href="/">Нүүр</a>
                </li>
                <li>
                  <a href="/">Нүүр</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
