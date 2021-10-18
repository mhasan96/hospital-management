import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/1.jpg";
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
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 opacity-80"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-80"
            src={banner3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-80"
            src={banner4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-80"
            src={banner5}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div
        className="container flex justify-around"
        style={{ marginTop: "25px" }}
      >
        <h3>
          <i
            style={{ marginRight: "20px", color: "rgba(0, 255, 255, 0.5)" }}
            className="fas fa-mobile-alt"
          ></i>
          +880156000000
        </h3>

        <h3>
          <i
            style={{ marginRight: "20px", color: "rgba(0, 255, 255, 0.5)" }}
            class="far fa-envelope"
          ></i>
          Care&life@info.com
        </h3>
        <h3>
          <i
            style={{ marginRight: "20px", color: "rgba(0, 255, 255, 0.5)" }}
            class="fas fa-map-marker-alt"
          ></i>
          Dhanmondi, Dhaka
        </h3>
      </div>
    </div>
  );
};

export default Slides;
