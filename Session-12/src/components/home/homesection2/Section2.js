import React from "react";
import "./Section2.css";
function Section2() {
  return (
    <div className="section2Container">
      <div className="d1">
        <img
          width="100%"
          height="100%"
          src="https://demo.htmlcodex.com/1479/online-shop-website-template/img/carousel-1.jpg"
        />
        <div>
          <h2>Men's Fashion</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
            alias totam aut sit eum repudiandae temporibus libero aperiam autem
          </p>
        </div>
      </div>
      <div className="d2">
        <img
          src="https://demo.htmlcodex.com/1479/online-shop-website-template/img/offer-1.jpg"
          height="100%"
          width="100%"
        />
        <div>
          <h2>Women's Fashion</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
          </p>
        </div>
      </div>
      <div className="d3">
        <img
          src="https://demo.htmlcodex.com/1479/online-shop-website-template/img/offer-2.jpg"
          height="100%"
          width="100%"
        />
        <div>
          <h2>Modern Fashion</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
