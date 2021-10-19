import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="container mt-16">
      <div
        className=" grid sm:grid-cols-1  lg:grid-cols-3  gap-0"
        style={{ color: "white", padding: "20px" }}
      >
        <div
          className="text-left"
          style={{ backgroundColor: "#3eb8d7", padding: "40px" }}
        >
          <h2>Specialist</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas in
            repellendus pariatur aperiam accusamus rem cupiditate tenetur maxime
            corporis asperiores.
          </p>
        </div>
        <div className="text-left bg-blue-500" style={{ padding: "40px" }}>
          <h2>24 Hours Service</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas in
            repellendus pariatur aperiam accusamus rem cupiditate tenetur maxime
            corporis asperiores.
          </p>
        </div>
        <div
          className="text-left"
          style={{ backgroundColor: "#3eb8d7", padding: "40px" }}
        >
          <h2>Available Time</h2>
          <p>Monday-Tuesday: 2-8 PM</p>
          <hr />
          <p>Thursday: 5-10 PM</p>
          <hr />
          <p>Saturday-Sunday: 10-7 PM</p>
        </div>
      </div>
      <h2>Specialist Doctors</h2>
      <div className="grid lg:grid-cols-4 mt-16 sm:grid-cols-1 gap-4">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
