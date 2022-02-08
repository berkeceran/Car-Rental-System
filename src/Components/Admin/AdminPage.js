/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import img1 from "../../images/carRental.jpg";
import SwitchButton from "../Switch/SwitchButton";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "../popUp/Popup";

import "./AdminPage.css";
////https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/addmanager?name=${person.name}&surname=${person.surname}&date=${person.birthDate}&national_id=${person.nationalId}&email=${person.email}&password=${person.password}&address=${person.address}&contact_number=${person.contactNumber}&salary=${person.salary}&allowed_leave_number=${person.allowedLeaveNumber}&work_hours_per_day=${person.workHoursPerDay}

function AdminPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [person, setPerson] = useState({
    name: "",
    surname: "",
    email: "",
    nationalId: "",
    password: "",
    verifyPassword: "",
    contactNumber: "",
    address: "",
    salary: "",
    allowedLeaveNumber: "",
    workHoursPerDay: "",
  });

  const [branch, setBranch] = useState({
    branchCity: "",
    branchName: "",
    branchAddress: "",
    branchCompanyName: "",
    branchManagerEmail: "",
  });

  const [company, setCompany] = useState({
    companyCompanyName: "",
    companyDescription: "",
  });

  let navigate = useNavigate();

  function validateFormManager() {
    return (
      person.name.length > 0 &&
      person.surname.length > 0 &&
      person.email.length > 0 &&
      person.national_id.length > 0 &&
      person.password.length > 0 &&
      person.confirmPassword.length > 0 &&
      person.address.length > 0 &&
      person.contact_number.length > 0 &&
      person.salary.length > 0 &&
      person.allowedLeaveNumber.length > 0 &&
      person.workHoursPerDay.length > 0
    );
  }

  function validateFormBranch() {
    return (
      person.branchCity.length > 0 &&
      person.branchName.length > 0 &&
      person.branchAddress.length > 0 &&
      person.branchCompanyName.length > 0 &&
      person.branchManagerEmail.length > 0
    );
  }

  function validateFormCompany() {
    return (
      person.companyCompanyName.length > 0 &&
      person.companyDescription.length > 0
    );
  }
  function handleManager() {
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/addmanager?name=${person.name}&surname=${person.surname}&date=2000-10-10&national_id=${person.nationalId}&email=${person.email}&password=${person.password}&address=${person.address}&contact_number=${person.contactNumber}&salary=${person.salary}&allowed_leave_number=${person.allowedLeaveNumber}&work_hours_per_day=${person.workHoursPerDay}
      `
    )
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        alert("Addition is succesful");
      });
  }
  function handleBranch() {
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/addbranch?city=${branch.branchCity}&branch_name=${branch.branchName}&address=${branch.branchAddress}&company_name=${branch.branchCompanyName}&manager_email=${branch.branchManagerEmail}`
    )
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        alert("Addition is succesful");
      });
  }
  function handleCompany() {
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/addcompany?company_name=${company.companyCompanyName}&description=${company.companyDescription}`
    )
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        alert("Addition is succesful");
      });
  }

  const handleChangeManager = (e) => {
    setPerson((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleChangeBranch = (e) => {
    setBranch((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleChangeCompany = (e) => {
    setCompany((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div id="adminPageCSS">
      <Container>
        <Row>
          {/*<SwitchButton /> */}
          <Col>
            <div className="addManager">
              <h3 style={{ marginTop: "15%" }}> ADD MANAGER </h3>
              <Form />
              <Form.Group size="lg" controlId="name">
                <Form.Control
                  autoFocus
                  type="text"
                  name="name"
                  value={person.name}
                  placeholder="Name"
                  onChange={handleChangeManager}
                  style={{ marginTop: "10%" }}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="surname">
                <Form.Control
                  autoFocus
                  type="text"
                  name="surname"
                  value={person.surname}
                  onChange={handleChangeManager}
                  placeholder="Surname"
                  style={{ marginTop: "20px" }}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="natiaonalId">
                <Form.Control
                  autoFocus
                  type="number"
                  name="nationalId"
                  value={person.nationalId}
                  placeholder="National Id"
                  onChange={handleChangeManager}
                  style={{ marginTop: "20px" }}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="email">
                <Form.Control
                  autoFocus
                  type="email"
                  name="email"
                  value={person.email}
                  placeholder="Email"
                  onChange={handleChangeManager}
                  style={{ marginTop: "20px" }}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="password">
                <Form.Control
                  autoFocus
                  type="password"
                  name="password"
                  value={person.password}
                  placeholder="Password"
                  onChange={handleChangeManager}
                  style={{ marginTop: "20px" }}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="address">
                <Form.Control
                  autoFocus
                  type="text"
                  name="address"
                  value={person.address}
                  placeholder="Address"
                  onChange={handleChangeManager}
                  style={{ marginTop: "20px" }}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="contact_number">
                <Form.Control
                  autoFocus
                  type="number"
                  name="contactNumber"
                  value={person.contactNumber}
                  placeholder="Contact Number"
                  onChange={handleChangeManager}
                  style={{ marginTop: "20px" }}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="salary">
                <Form.Control
                  autoFocus
                  type="number"
                  name="salary"
                  value={person.salary}
                  placeholder="Salary"
                  onChange={handleChangeManager}
                  style={{ marginTop: "20px" }}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="leave">
                <Form.Control
                  autoFocus
                  type="number"
                  name="allowedLeaveNumber"
                  value={person.allowedLeaveNumber}
                  placeholder="Allowed Leave Number"
                  onChange={handleChangeManager}
                  style={{ marginTop: "20px" }}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="perday">
                <Form.Control
                  autoFocus
                  type="number"
                  name="workHoursPerDay"
                  value={person.workHoursPerDay}
                  onChange={handleChangeManager}
                  placeholder="Work Hours Per Day"
                  style={{ marginTop: "20px" }}
                />
              </Form.Group>

              <Button
                style={{ marginTop: "10px", width: "150px" }}
                block="true"
                size="lg"
                type="submit"
                onClick={handleManager}
              >
                Add
              </Button>
            </div>
          </Col>
          <Col>
            <div className="addBranch">
              <h3 style={{ marginTop: "15%" }}> ADD BRANCH </h3>
              <Form>
                <Form.Group size="lg" controlId="city">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="branchCity"
                    value={branch.branchCity}
                    onChange={handleChangeBranch}
                    placeholder="City"
                    style={{ marginTop: "10%" }}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="branchName">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="branchName"
                    value={branch.branchName}
                    placeholder="Branch Name"
                    onChange={handleChangeBranch}
                    style={{ marginTop: "5px" }}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="address">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="branchAddress"
                    value={branch.branchAddress}
                    placeholder="Address"
                    onChange={handleChangeBranch}
                    style={{ marginTop: "5px" }}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="companyName">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="branchCompanyName"
                    value={branch.branchCompanyName}
                    placeholder="Company Name"
                    onChange={handleChangeBranch}
                    style={{ marginTop: "5px" }}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="managerEmail">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="branchManagerEmail"
                    value={branch.branchManagerEmail}
                    placeholder="Manager Email"
                    onChange={handleChangeBranch}
                    style={{ marginTop: "5px" }}
                  />
                </Form.Group>
              </Form>
              <Button
                style={{ marginTop: "10px", width: "150px" }}
                block="true"
                size="lg"
                type="submit"
                onClick={handleBranch}
              >
                Add
              </Button>
            </div>
          </Col>
          <Col>
            <div className="createCompany">
              <h3 style={{ marginTop: "15%" }}> CREATE COMPANY </h3>
              <Form>
                <Form.Group size="lg" controlId="companyName">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="companyCompanyName"
                    onChange={handleChangeCompany}
                    value={company.companyCompanyName}
                    placeholder="Company Name"
                    style={{ marginTop: "10%" }}
                  />
                </Form.Group>
                <Form.Group size="xxl" controlId="description">
                  <Form.Control
                    autoFocus
                    type="text"
                    name="companyDescription"
                    value={company.companyDescription}
                    placeholder="Description"
                    onChange={handleChangeCompany}
                    style={{ marginTop: "5px" }}
                  />
                </Form.Group>
                <Button
                  style={{ marginTop: "10px", width: "150px" }}
                  block="true"
                  size="lg"
                  type="submit"
                  onClick={handleCompany}
                >
                  Create
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminPage;
