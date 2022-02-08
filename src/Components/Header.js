/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import { AiOutlineFileText } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <h2
              style={{
                fontWeight: "bold",
                color: "white",
                fontStyle: "italic",
                textDecorationLine: "underline",
              }}
            >
              Car Rental System
            </h2>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#form">
              <AiOutlineFileText className="text-icon" />
            </Nav.Link>

            <Nav.Link href="#notification">
              <MdOutlineEmail className="mail-icon" />
            </Nav.Link>

            <Nav.Link href="/CustomerProfile">
              <BsPersonCircle className="person-icon" />
            </Nav.Link>

            <Nav.Link
              href="/login"
              onClick={() => {
                localStorage.clear();
              }}
            >
              <RiLogoutBoxRLine className="text-icon" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
