/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img1 from "../../images/carRental.jpg";

import { useLocation, useNavigate } from "react-router-dom";
import Popup from "../popUp/Popup";
import SwitchButton from "../Switch/SwitchButton";

import "./Login.css";
import getPlacements from "antd/lib/tooltip/placements";

function Login(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  const [message, setMessage] = useState("");

  let navigate = useNavigate();

  useEffect(() => {}, [data]);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/login?email=${email}&password=${password}
      `
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.body);
          if (result.body["message"] === "executionTrue") {
            if (result.body["person_type"] === "customer") {
              localStorage.setItem("logedIn", "true");
              localStorage.setItem("customerEmail", email);
              localStorage.setItem("customerPassword", password);
              localStorage.setItem("customerId", result.body["customer"][0]);
              localStorage.setItem("customerType", result.body["person_type"]);
              navigate("/SearchCarCustomer");
            } else if (result.body["person_type"] === "employee") {
              localStorage.setItem("logedIn", "true");
              localStorage.setItem("employeeEmail", email);
              localStorage.setItem("employeePassword", password);
              localStorage.setItem("employeeId", result.body["employee"][0]);
              localStorage.setItem("employeeType", result.body["person_type"]);
              navigate("/EmployeeMainPage");
            } else if (result.body["person_type"] === "manager") {
              localStorage.setItem("logedIn", "true");
              localStorage.setItem("managerEmail", email);
              localStorage.setItem("managerPassword", password);
              localStorage.setItem("managerId", result.body["manager"][0]);
              localStorage.setItem("managerType", result.body["person_type"]);
              navigate("/ManagerMainPage");
            } else if (result.body["person_type"] === "premium_customer") {
              localStorage.setItem("logedIn", "true");
              localStorage.setItem("premium_customerEmail", email);
              localStorage.setItem("premium_customerPassword", password);
              localStorage.setItem(
                "premium_customerId",
                result.body["customer"][0]
              );
              localStorage.setItem(
                "premium_customerType",
                result.body["person_type"]
              );
              navigate("/customerMainPage");
            }
          } else if (result.body["message"] === "executionFalse") {
            localStorage.setItem("logedIn", "false");
            setMessage("Email or Password is wrong !!!");
            clickHandler();
          } else {
            localStorage.setItem("logedIn", "false");
            setMessage("Database Connection Get Error");
            clickHandler();
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }
  const clickHandler = () => {
    setPopUp(true);
  };

  return (
    <div>
      <Container
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 2,
          xl: 6,
          xxl: 3,
        }}
      >
        <Row>
          <Col lg={6} style={{}}>
            <img
              src={img1}
              alt=""
              style={{
                width: "80%",
                height: "80%",
                marginTop: "250px",
              }}
            />
          </Col>

          <Col
            lg={6}
            style={{ alignItems: "center", flext: "1", marginTop: "200px" }}
          >
            <div className="Login">
              <SwitchButton />
              <Form onSubmit={handleSubmit} style={{ marginTop: "10%" }}>
                <Form.Group size="lg" controlId="email">
                  <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginTop: "5px" }}
                  />
                  {<AiOutlineMail className="email-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Control
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginTop: "20px" }}
                  />
                  <RiLockPasswordFill className="password-icons" />
                </Form.Group>

                <Button
                  style={{ marginTop: "10px", width: "150px" }}
                  block
                  size="lg"
                  type="submit"
                  disabled={!validateForm()}
                >
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Popup trigger={popUp} setPopUp={setPopUp} message={message} />
    </div>
  );
}

export default Login;
