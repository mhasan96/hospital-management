import React from "react";

const Features = () => {
  return (
    <div>
      <h1>Why Us?</h1>
      <div
        className="container grid sm:grid-cols-1  lg:grid-cols-3  gap-0"
        style={{ color: "white", padding: "20px" }}
      >
        <div
          className="text-left"
          style={{ backgroundColor: "#3eb8d7", padding: "40px" }}
        >
          <h2>Top Quality Equipments</h2>
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
          <h2>Foreign Doctors</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas in
            repellendus pariatur aperiam accusamus rem cupiditate tenetur maxime
            corporis asperiores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
