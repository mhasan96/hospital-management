import React from "react";
import img from "../../../images/top-quality.png";

const Features = () => {
  return (
    <div id="home" className="container">
      <h1 className="text-4xl">World Class Treatment</h1>
      <div
        className=" grid sm:grid-cols-1  lg:grid-cols-3  gap-0"
        style={{ color: "white", padding: "20px" }}
      >
        <div
          className="text-left"
          style={{ backgroundColor: "#3eb8d7", padding: "40px" }}
        >
          <p className="text-3xl">Top Quality Equipments</p>
          <p>
            Health is not just the absence of a disease in the body. It is a
            state of a complete mental, physical, and social well-being. Read
            our list of Health Bytes here.
          </p>
        </div>
        <div className="text-left bg-blue-500" style={{ padding: "40px" }}>
          <p className="text-3xl">24 Hours Service</p>
          <p>
            Health is not just the absence of a disease in the body. It is a
            state of a complete mental, physical, and social well-being. Read
            our list of Health Bytes here.
          </p>
        </div>
        <div
          className="text-left"
          style={{ backgroundColor: "#3eb8d7", padding: "40px" }}
        >
          <p className="text-3xl">Foreign Doctors</p>
          <p>
            Health is not just the absence of a disease in the body. It is a
            state of a complete mental, physical, and social well-being. Read
            our list of Health Bytes here.
          </p>
        </div>
      </div>
      <p className="m-12 text-4xl">Why Us?</p>
      <div className="grid lg:grid-cols-2">
        <div className="mt-20">
          <p className="text-3xl">Best Doctors</p>
          <p>
            SevenHills Group has over two decades of experience in the
            healthcare sector, and is known for providing quality healthcare and
            valuable experience to all domestic and international patients. Our
            healthcare offerings are supported by a team of compassionate and
            dedicated medical professionals who have rich knowledge and
            experience in their respective domains.
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
