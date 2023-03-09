import React, { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      pauseOnHover: true,
      adaptiveHeight: false,
      touchMove: true,
    };
    return (
      <div className="carrusel">
        <Slider {...settings}>
          <div className="carruselSep">
            <div className="carruselItem">
              <img
                src="https://res.cloudinary.com/mostarq/image/upload/v1675631860/serLibreApp/ydv7klpuujy4b1sfu02c.jpg"
                alt=""
              />
              <div className="cardBase">
                <h11>Acompañamiento por 2 meses</h11>
                <div>
                  <button
                    type="submit"
                    className="buttonCarrusel"
                    value="INSCRÍBETE"
                  >
                    INSCRÍBETE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carruselSep">
            <div className="carruselItem">
              <img
                src="https://res.cloudinary.com/mostarq/image/upload/v1675778361/serLibreApp/fdjnaxhdzwrshohsoxls.jpg"
                alt=""
              />
              <div className="cardBase">
                <h11>Membresía online</h11>
                <div>
                  <button
                    type="submit"
                    className="buttonCarrusel"
                    value="INSCRÍBETE"
                  >
                    INSCRÍBETE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carruselSep">
            <div className="carruselItem">
              <img
                src="https://res.cloudinary.com/mostarq/image/upload/v1676490911/serLibreApp/gpo3q1xhffxfkacrqvuw.jpg"
                alt=""
              />
              <div className="cardBase">
                <h11>Ceremonia Cacao Online</h11>
                <div>
                  <button
                    type="submit"
                    className="buttonCarrusel"
                    value="INSCRÍBETE"
                  >
                    INSCRÍBETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
