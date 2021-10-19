import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../Hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();

  const [changeHeader, setChangeHeader] = useState(false);
  //header change function
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };
  window.addEventListener("scroll", onChangeHeader);
  return (
    <div className="flex justify-between">
      <Navbar
        expand="lg"
        fixed="top"
        className={
          changeHeader
            ? "bg-blue-400   w-full shadow-md transition duration-500"
            : "bg-transparent text-white w-full transition duration-500"
        }
      >
        <Container className="flex justify-between">
          <div>
            <Navbar.Brand className="text-black font-bold " href="#home">
              Navbar
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="text-black" as={HashLink} to="/home#home">
                  Home
                </Nav.Link>
                <Nav.Link
                  className="text-black "
                  as={HashLink}
                  to="/home#services"
                >
                  Services
                </Nav.Link>
                <Nav.Link className="text-black " href="#pricing">
                  Pricing
                </Nav.Link>
                <Nav.Link className="text-black " href="#pricing">
                  Sign Up
                </Nav.Link>
                <Nav.Link className="text-black " as={HashLink} to="/doctors">
                  Doctors
                </Nav.Link>
                {user.email ? (
                  <Nav.Link className="text-black " onClick={logOut}>
                    Logout
                  </Nav.Link>
                ) : (
                  <Nav.Link as={HashLink} to="/login" className="text-black ">
                    Login
                  </Nav.Link>
                )}
                <Navbar.Text className="text-black ">
                  Signed in as: <a>{user?.displayName}</a>
                  {/* console.log */}
                </Navbar.Text>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
