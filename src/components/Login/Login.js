import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const { SignInUsingGoogle } = useAuth();

  return (
    <div className="container register-form mt-12 ">
      <div className="bg-grey-lighter min-h-screen flex flex-col lg:mx-64">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">
              Already have an account! Login
            </h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="w-full text-center py-3  rounded bg-green text-black bg-blue-400 hover:bg-blue-600 focus:outline-none my-1"
            >
              Sign In
            </button>

            <button
              onClick={SignInUsingGoogle}
              className="me-4 text-reset border-2 p-2"
            >
              <i className="fab fa-google"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
