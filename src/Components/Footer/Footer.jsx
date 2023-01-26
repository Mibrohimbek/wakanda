import React from "react";
import "../../scss/footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="d-flex">
            <div className="left col-5">
              <img className="logo" src="../src/assets/footer-logo.png" alt="" />
              <br />
              <a href="#">
                <img src="../src/assets/instagram-icon.png" alt="" />
              </a>
              <a href="#">
                <img src="../src/assets/internet-icon.png" alt="" />
              </a>
              <a href="#">
                <img src="../src/assets/twitter-icon.png" alt="" />
              </a>
              <a href="#">
                <img src="../src/assets/youtube-icon.png" alt="" />
              </a>
              <p>Copyright © 2022 Wakanda. All rights reserved</p>
            </div>
            <div className="company col-2">
                <h3>Company</h3>
                <a href="#" className="nav-item">About us</a>
                <a href="#" className="nav-item">Blog</a>
                <a href="#" className="nav-item">Contact us</a>
                <a href="#" className="nav-item">How it works</a>
                <a href="#" className="nav-item">For freelancer</a>
            </div>
            <div className="support col-2">
                <h3>Support</h3>
                <a href="#" className="nav-item">Help center</a>
                <a href="#" className="nav-item">Terms of service</a>
                <a href="#" className="nav-item">Legal</a>
                <a href="#" className="nav-item">Privacy policy</a>
                <a href="#" className="nav-item">Status</a>
            </div>
            <div className="subscribe">
                <h3>Subscribe to our newsletter</h3>
                <form action="">
                    <input type="email" placeholder="Your email address" />
                </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
