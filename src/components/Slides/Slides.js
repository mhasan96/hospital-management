import React from "react";
import { Carousel } from "react-bootstrap";
import banner2 from "../../images/2.jpg";
import banner3 from "../../images/3.jpg";
import banner4 from "../../images/4.jpg";
import banner5 from "../../images/5.jpg";
import banner6 from "../../images/6.jpg";
import "./Slides.css";

const Slides = () => {
  return (
    <div>
      <Carousel role="listbox" className="banner ">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 opacity-80"
            src={banner6}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 opacity-80"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-80"
            src={banner3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-80"
            src={banner4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-80"
            src={banner5}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div
        className="container flex justify-around flex-wrap text-4xl "
        style={{ marginTop: "25px", marginBottom: "25px" }}
      >
        <p>
          <i
            style={{ marginRight: "20px", color: "rgba(0, 255, 255, 0.5)" }}
            className="fas fa-mobile-alt"
          ></i>
          +880156000000
        </p>

        <p>
          <i
            style={{ marginRight: "20px", color: "rgba(0, 255, 255, 0.5)" }}
            class="far fa-envelope"
          ></i>
          info@care.com
        </p>
        <p>
          <i
            style={{ marginRight: "20px", color: "rgba(0, 255, 255, 0.5)" }}
            class="fas fa-map-marker-alt"
          ></i>
          Dhanmondi, Dhaka
        </p>
      </div>
    </div>
  );
};

export default Slides;
