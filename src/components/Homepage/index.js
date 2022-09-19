import React from "react";
import "./Homepage.css";
import Img1 from "../../img/bg2.jpg";

function Homepage() {
  return (
    <div className="home__container">


      {/* Homepage top */}
      <div className="homepage">
        <div className="homepage__hero">
          <p className="hero__motto">Practice makes perfect!</p>
          <h2 className="hero__main">
            what are you waiting? <br /> join us !
          </h2>
          <button className="hero__btn">Start practicing now</button>
        </div>
      </div>

      {/* Our products */}

      <div className="our-products">
        <h1>Our products</h1>
        <h4 className="dark-text">Comprehensive IELTS preparation</h4>
        <div className="product-list">
          <div className="product pr1">
          <i class="fa-brands fa-youtube"></i>
          <div>
            <h4>Online classes</h4>
            <p className="dark-text">For an exhaustive learning experience</p>
          </div>
          </div>
          <div className="product pr2">
          <i class="fa-solid fa-chalkboard-user"></i>
            <div>
            <h4>Self learning</h4>
            <p className="dark-text">For self preparation</p>
            </div>
          </div>
          <div className="product pr3">
          <i class="fa-solid fa-book-open"></i>
            <div>
            <h4>eBooks</h4>
            <p className="dark-text">For latest questions and answers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="line__inner"></div>
      </div>

    {/* Modules */}

    <div className="self-study-modules">

      <h1>Our Free Self Study materials</h1>
      <h4 className="dark-text">Choose by module</h4>

    <div className="ss__modules">
      <div className="module">
          <h2>IELTS General</h2>
          <p className="dark-text">Take IELTS to migrate Australia, Canada, New Zealand and the UK.</p>
      </div>
      <div className="module">
          <h2>IELTS Academic</h2>
          <p className="dark-text">IELTS is recognised by more than 10,000 education and training providers worldwide.</p>
      </div>
    </div>
    <h4 className="dark-text">Choose by section</h4>
    <div className="ss__sections">
      <div className="ss_sec">
      <i class="fa-solid fa-headphones"></i>
        <h4>Listening</h4>
      </div>
      <div className="ss_sec">
      <i class="fa-solid fa-book"></i>
        <h4>Reading</h4>
      </div>
      <div className="ss_sec">
      <i class="fa-solid fa-pen"></i>
        <h4>Writing</h4>
      </div>
      <div className="ss_sec">
      <i class="fa-solid fa-bolt"></i>
        <h4>Speaking</h4>
      </div>
    </div>
    </div>    

    </div>
  );
}

export default Homepage;
