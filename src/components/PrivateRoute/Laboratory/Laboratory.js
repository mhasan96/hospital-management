import React from "react";

import img from "../../../images/lab.jpg";
const Laboratory = () => {
  return (
    <div className="container mt-5" style={{ paddingTop: "50px" }}>
      <p className="mt-5 text-3xl">Our Research Lab</p>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-5">
        <p className="mt-5 text-xl">
          There are a variety of skilled and educated laboratory professionals
          who, as a patient, you may never see face-to-face. However, these
          individuals play a very important role in your health care. People
          working in the clinical laboratory are responsible for conducting
          tests that provide crucial information for detecting, diagnosing,
          treating, and monitoring disease.
        </p>
        <img className="ml-5" src={img} alt="" />
      </div>
    </div>
  );
};

export default Laboratory;
