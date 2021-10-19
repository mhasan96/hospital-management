import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const { SignInUsingGoogle } = useAuth();

  return (
    <div>
      <h2>Please Login</h2>
      <Button onClick={SignInUsingGoogle} className="btn btn-warning">
        Google Sign In
      </Button>
    </div>
  );
};

export default Login;
