import React from "react";
import Twig from "../../../assets/images/twig.png";
import PromoBanner from "../../../assets/images/promo-banner.jpeg";

function PromotionSec() {
  return (
    <div className="container">
      <div className="bs-sec typ-content">
        <p className="styled-title">Just for you</p>
        <p className="sec-title">Making & crafting</p>

        <div className="row promo-banner">
          <div className="col-md-5">
            <div className="bg-circle">
              <img src={Twig} alt="twig" />
              <p className="styled-title">Spring Sale</p>
              <p className="discount">
                <span>40</span>% off
              </p>
              <p className="btn btn-link">Shop Now</p>
            </div>
          </div>

          <div className="col-md-7 right-banner">
            <div className="bg-rec">
              <img src={PromoBanner} alt="discount-banner" />
            </div>

            <div className="bg-rec_footer">
              <div className="info-wrap">
                <p className="discount">20% off</p>
                <button className="btn btn-primary">Shop Now</button>
              </div>
              <p className="desc">On your first order</p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-none">
        <svg
          width="200"
          height="200"
          viewBox="0 0 220 220"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="displacementFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.05"
              numOctaves="2"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          <circle
            cx="100"
            cy="100"
            r="100"
            style={{ filter: "url(#displacementFilter)" }}
          />
        </svg>
      </div>
    </div>
  );
}

export default PromotionSec;
