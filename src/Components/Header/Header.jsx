import React from "react";
import "../../scss/header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src="../src/assets/Logo.png" alt="" />
          </div>
          <nav className="nav">
            <ul>
              <li className="d-flex gap-5 align-items-center">
                <a href="#" className="nav-items">
                  Home
                </a>
                <a href="#" className="nav-items">
                  About us
                </a>
                <a href="#" className="nav-items">
                  How it works
                </a>
                <a href="#" className="nav-items">
                  For Freelancer
                </a>
                <a href="#" className="btn-start">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
