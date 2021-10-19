import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";

const SingleService = () => {
  let { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleService, setSingleService] = useState({});

  //loading Data
  useEffect(() => {
    fetch("/singleService.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  //filter data
  useEffect(() => {
    const foundService = serviceDetails.find((service) => service.id == id);
    setSingleService(foundService);
  }, [serviceDetails]);

  return (
    <div className="container mt-24 ">
      <h2> {singleService?.name} Details</h2>
      <div className="grid lg:grid-cols-6 sm:grid-cols-1 mt-16 text-center  justify-center">
        <CardGroup className="col-start-2 col-span-4">
          <Card>
            <Card.Img variant="top" src={singleService?.img} />
            <Card.Body>
              <Card.Title className="text-left font-bold font-xl text-blue-500">
                {singleService?.name}
              </Card.Title>
              <hr />
              <Card.Text className="text-left ">
                {singleService?.details}
              </Card.Text>
              <hr />
              <Card.Text className="text-left font-bold ">
                Available Dr:{" "}
                <NavLink to="/doctors">{singleService?.doctor1}</NavLink>{" "}
                <NavLink to="/doctors">{singleService?.doctor2}</NavLink>
              </Card.Text>
              <hr />
              <Card.Text className="text-left ">
                Cost: ${singleService?.cost}
              </Card.Text>
              {/* <Card.Text className="text-left ">Email: {email}</Card.Text> */}
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default SingleService;
