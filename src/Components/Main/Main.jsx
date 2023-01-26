import React from "react";
import "../../scss/main.scss";

function Main() {
  return (
    <>
      <main>
        <section id="hero">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="intro">
                <h3>
                  Recruit top talented <br /> freelancer for your <br />{" "}
                  business
                </h3>
                <p>
                  Connect you to thoudsands of talented freelancer from <br />{" "}
                  any industry. You can have the best people in just few <br />{" "}
                  simple steps.
                </p>
                <a href="#">Get Started</a>
              </div>
              <div className="portret">
                <img src="../src/assets/hero-portret.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="logos">
          <div className="container">
            <div className="brands d-flex justify-content-between">
              <img src="../src/assets/Airbnb-Logo.svg" alt="" />
              <img src="../src/assets/Google-Logo.svg" alt="" />
              <img src="../src/assets/Slack-Logo.svg" alt="" />
              <img src="../src/assets/Netflix-Logo.svg" alt="" />
              <img src="../src/assets/Amazon-Logo.svg" alt="" />
            </div>
          </div>
        </section>

        <section id="features">
          <div className="benefits">
            <div className="container">
              <h2>FEATURE</h2>
              <h3>
                The benefit of using <br /> our platform
              </h3>
              <div className="box-dad d-flex justify-content-between">
                <div className="box box-1">
                  <img src="../src/assets/benefit-1.png" alt="" />
                  <h4>Professional & Fast</h4>
                  <p>
                    Search and hire the most talented freelancers to match your
                    needs. No matter what you need done, we've got the perfect
                    freelancer for you.
                  </p>
                </div>

                <div className="box box-2">
                  <img src="../src/assets/benefit-2.png" alt="" />
                  <h4>24/7 support</h4>
                  <p>
                    You have any concerns or questions? Don’t worry, we have our
                    support team to help you at anytime and anywhere.
                  </p>
                </div>

                <div className="box box-3">
                  <img src="../src/assets/benefit-3.png" alt="" />
                  <h4>Safe & Secure</h4>
                  <p>
                    We know that safety is the most important thing for our
                    customer, so all of our payments are processed instantly and
                    securely.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="easy-platform">
            <div className="container">
              <div className="d-flex">
                <div>
                  <img
                    className="users"
                    src="../src/assets/Wireframes.png"
                    alt=""
                  />
                </div>
                <div className="right">
                  <h3>
                    Wakanda is an easy <br /> platform to find talent
                  </h3>
                  <p className="number">1</p>
                  <p>Sign in to our website</p>
                  <br />
                  <p className="number">2</p>
                  <p>Fill out neccesary information</p>
                  <br />
                  <p className="number">3</p>
                  <p>Discover thoudsands of freelancers</p>
                  <br />
                  <p className="number">4</p>
                  <p>View freelancer’s profile and hire</p>
                  <br />
                  <p className="number">5</p>
                  <p>Complete payment & it’s time to work!</p>
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div className="explore-hire">
            <div className="container">
              <div className="d-flex">
                <div className="left">
                  <h3>
                    Explore and hire talent <br /> from our platform
                  </h3>
                  <p>
                    We've got experts for every industry - all under one roof!
                    You can <br /> find everything from WordPress developers to
                    Graphic designers to <br /> copywriters and many more at
                    Wakanda.
                  </p>
                  <a href="#">Explore now</a>
                </div>
                <div className="d-flex right">
                  <img
                    className="explore-img"
                    src="../src/assets/explore-hire.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonial">
          <div className="container">
            <h2>TESTIMONIAL</h2>
            <h3>
              See what they’re saying <br /> about us
            </h3>
            <div className="cards-dad row justify-content-between gy-4">
              <div className="box">
                <div className="card-header d-flex gap-3">
                  <img src="../src/assets/cara.png" alt="" />
                  <div>
                    <p className="m-0">Cara Bedford</p>
                    <img src="../src/assets/stars.png" alt="" />
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    I have been using Wakanda for quite some time now and I have
                    to say it has been the best freelance hiring platform that
                    I've used. The quality of freelancers on this site is very
                    high and they're totally reliable. I would highly recommend
                    it!
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="card-header d-flex gap-3">
                  <img src="../src/assets/robert.png" alt="" />
                  <div>
                    <p className="m-0">Robert Fox</p>
                    <img src="../src/assets/stars.png" alt="" />
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    I’m so happy because the freelance talent we work with are
                    more productive than we have ever thought. Recommend for
                    people who want to find professional freelancer on this
                    platform.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="card-header d-flex gap-3">
                  <img src="../src/assets/albert.png" alt="" />
                  <div>
                    <p className="m-0">Albert Flores</p>
                    <img src="../src/assets/stars.png" alt="" />
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    I have been using Wakanda for quite some time now and I have
                    to say it has been the best freelance hiring platform that
                    I've used. The quality of freelancers on this site is very
                    high and they're totally reliable. I would highly recommend
                    it!
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="card-header d-flex gap-3">
                  <img src="../src/assets/kathryn.png" alt="" />
                  <div>
                    <p className="m-0">Kathryn Murphy</p>
                    <img src="../src/assets/stars.png" alt="" />
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    One of the best things about Wakanda is that it really
                    simplifies the process of finding and hiring people. The
                    quality is good as well, every freelancer I've hired has
                    been high-quality and professional. I would recommend this
                    to anyone who needs a freelancer.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="card-header d-flex gap-3">
                  <img src="../src/assets/esther.png" alt="" />
                  <div>
                    <p className="m-0">Esther Howard</p>
                    <img src="../src/assets/stars.png" alt="" />
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    have used a lot of freelance hiring platforms, but none
                    compare to Wakanda. The quality of freelancers that I can
                    find here is unmatched and the service is top-notch. The
                    customer service is also excellent, which cannot be said for
                    my previous experiences in using other apps. I would highly
                    recommend this product for anyone looking to hire a
                    freelancer.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="card-header d-flex gap-3">
                  <img src="../src/assets/eleanor.png" alt="" />
                  <div>
                    <p className="m-0">Eleanor Pena</p>
                    <img src="../src/assets/stars.png" alt="" />
                  </div>
                </div>
                <div className="card-body">
                  I have used a number of different freelance hiring platforms
                  and none come close to Wakanda. The quality of the freelancers
                  on here is top notch and it's easy to browse through the
                  listings. I've been using it for six months now and I've found
                  my perfect freelancer without any regrets whatsoever.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="start-business">
          <div className="container">
            <div className="start d-flex">
              <div className="image d-flex  left">
                <img
                  className="ms-auto me-auto"
                  src="../src/assets/start-woomen.png"
                  alt="nothing"
                />
              </div>
              <div className="right">
                <p>WHAT ARE YOU WAITING FOR?</p>
                <h3>Find the talent to get your business growing</h3>
                <a href="#" className="btn-start">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
