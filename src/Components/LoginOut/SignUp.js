/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { BsPersonSquare } from "react-icons/bs";
import { BsCalendar2DateFill } from "react-icons/bs";
import { AiFillIdcard } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import img1 from "../../images/carRental.jpg";
import SwitchButton from "../Switch/SwitchButton";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "../popUp/Popup";

import "./SignUp.css";

function SignUp() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  const [message, setMessage] = useState("");

  const [person, setPerson] = useState({
    name: "",
    surname: "",
    email: "",
    date: "",
    national_id: "",
    password: "",
    verifyPassword: "",
    address: "",
    contact_number: "",
    licence_type: "",
    given_date: "",
  });

  const [birthDate, setBirthDate] = useState(new Date());
  const [licenceDate, setLicenceDate] = useState(new Date());

  let navigate = useNavigate();

  function validateForm() {
    return (
      person.name.length > 0 &&
      person.surname.length > 0 &&
      person.email.length > 0 &&
      person.national_id.length > 0 &&
      person.password.length > 0 &&
      person.verifyPassword.length > 0 &&
      person.address.length > 0 &&
      person.contact_number.length > 0 &&
      person.licence_type.length > 0
    );
  }

  function handleSubmit(event) {
    if (person.password === person.verifyPassword) {
      event.preventDefault();
      person.date = `${birthDate.getFullYear()}-${
        birthDate.getMonth() + 1
      }-${birthDate.getDate()}`;
      person.given_date = `${licenceDate.getFullYear()}-${
        licenceDate.getMonth() + 1
      }-${licenceDate.getDate()}`;

      fetch(
        `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/signup?name=${person.name}&surname=${person.surname}&birth_date=${person.date}&national_id=${person.national_id}&email=${person.email}&password=${person.password}&address=${person.address}&contact_number=${person.contact_number}&license_type=${person.licence_type}&given_date=${person.given_date}`
      )
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoaded(true);
            console.log(result.body);
            console.log(result.body["message"]);
            if (result.body["message"] === "executionTrue") {
              setMessage("Sign Up is succesfull");
              clickHandler();
              navigate("/login");
            } else if (result.body["message"] === "executionFalse") {
              setMessage("Sign Up is not succesfull");
              clickHandler();
            } else {
              alert("Database Connection Get Error");
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    } else {
      alert("Your password and verify password is not equal");
    }
  }

  const handleChange = (e) => {
    setPerson((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };
  const clickHandler = () => {
    setPopUp(true);
  };

  return (
    <div class="signUpCSS">
      <Container>
        <Row>
          {/*<SwitchButton /> */}
          <SwitchButton style={{ marginTop: "30px" }} />
          <Col style={{}}>
            <div className="Login">
              <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="name">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="name"
                    value={person.name}
                    placeholder="Name"
                    onChange={handleChange}
                    style={{ marginTop: "5px" }}
                  />
                  {<BsFillPersonFill className="email-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="surname">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="surname"
                    value={person.surname}
                    placeholder="Surname"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<BsPersonSquare className="email-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="email">
                  <Form.Control
                    autoFocus
                    type="email"
                    name="email"
                    value={person.email}
                    placeholder="Email"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<AiOutlineMail className="email-icons" />}
                </Form.Group>

                <div style={{ marginTop: "20px", alignItems: "left" }}>
                  <label
                    style={{
                      marginTop: "5px",
                      marginBottom: "5px",
                      fontWeight: "bold",
                      color: "grey",
                      fontStyle: "italic",
                    }}
                  >
                    Birth Date
                  </label>
                  <DatePicker
                    dateFormat={"dd/MM/yyyy"}
                    selected={birthDate}
                    onChange={(date) => setBirthDate(date)}
                  />
                </div>
                {<BsCalendar2DateFill className="email-icons" />}
                <Form.Group size="lg" controlId="natiaonalId">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="national_id"
                    value={person.national_id}
                    placeholder="National Id"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<AiFillIdcard className="email-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Control
                    autoFocus
                    type="password"
                    name="password"
                    value={person.password}
                    placeholder="Password"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<RiLockPasswordLine className="password-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="verifyPassword">
                  <Form.Control
                    autoFocus
                    type="password"
                    name="verifyPassword"
                    value={person.verifyPassword}
                    placeholder="Verify Password"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<RiLockPasswordFill className="password-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="address">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="address"
                    value={person.address}
                    placeholder="Address"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<FaAddressCard className="email-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="contact_number">
                  <Form.Control
                    autoFocus
                    type="number"
                    name="contact_number"
                    value={person.contact_number}
                    placeholder="Contact Number"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<RiLockPasswordLine className="password-icons" />}
                </Form.Group>

                <Form.Group size="lg" controlId="licence_type">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="licence_type"
                    value={person.licence_type}
                    placeholder="Licence Type"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                  />
                  {<RiLockPasswordLine className="password-icons" />}
                </Form.Group>

                <div style={{ marginTop: "20px", alignItems: "left" }}>
                  <label
                    style={{
                      marginTop: "5px",
                      marginBottom: "5px",
                      fontWeight: "bold",
                      color: "grey",
                      fontStyle: "italic",
                    }}
                  >
                    Licence Given Date
                  </label>
                  <DatePicker
                    selected={licenceDate}
                    dateFormat={"dd/MM/yyyy"}
                    onChange={(date) => setLicenceDate(date)}
                  />
                </div>
                {<BsCalendar2DateFill className="email-icons" />}

                <Button
                  style={{ marginTop: "10px", width: "150px" }}
                  block="true"
                  size="lg"
                  type="submit"
                  disabled={!validateForm()}
                >
                  Sign Up
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

export default SignUp;
