import React from "react";
import img from "../../../images/top-quality.png";

const Features = () => {
  return (
    <div id="home" className="container">
      <h1>World Class Treatment</h1>
      <div
        className=" grid sm:grid-cols-1  lg:grid-cols-3  gap-0"
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
      <h1 className="m-12">Why Us?</h1>
      <div className="grid lg:grid-cols-2">
        <div className="mt-20">
          <h1>Best Doctors</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            voluptates corrupti possimus quaerat non consectetur! Adipisci ea
            repellat voluptatem, eum minus in blanditiis doloribus. Itaque
            perspiciatis nesciunt, ipsam, perferendis et rem pariatur impedit
            earum odit voluptate quaerat? Nulla, natus ex nam delectus eius
            suscipit iure aspernatur dolore dignissimos exercitationem quaerat
            praesentium, aut corporis dolorem eaque consequuntur reprehenderit
            magnam! Corrupti, expedita!
          </p>
        </div>
        <div className="flex-auto ml-20px">
          <img style={{ width: "90%", marginLeft: "50px" }} src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
