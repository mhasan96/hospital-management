import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
// import Slider from "react-slick";

const Service = ({ service }) => {
  const { name, img, details } = service;
  //   const settings = {
  //     dots: true,
  //     arrow: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };
  return (
    <div className="container">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-left">{name}</Card.Title>
            <hr />
            <Card.Text className="text-left ">
              {details.slice(0, 200)}
            </Card.Text>
            <Button>Book Now</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;
