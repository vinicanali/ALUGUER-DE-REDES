import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">SEGURANÇA</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./IMG_56595.jpg" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">NA</h1>
            
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="icons8-goleiro-com-rede-100.png" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="./IMG_56601.jpg" alt="hero" />
          </div>
          <h1 className="title dishes_title">BALIZA</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
