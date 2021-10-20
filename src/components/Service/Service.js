import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import Slider from "react-slick";

const Service = ({ service }) => {
  const { name, img, details, id } = service;
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
            <NavLink to={`/service/${id}`}>
              <button className="bg-blue-400 hover:bg-blue-600 px-8 py-2 rounded-xl text-white hover:text-black">
                Learn More
              </button>
            </NavLink>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;
