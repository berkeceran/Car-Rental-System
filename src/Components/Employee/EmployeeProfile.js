/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from "react";
import "./employeeProfile.css";
import profileImage from "../../images/profile.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bmwI8 from "../../images/bmw-i8.png";

function EmployeeProfile() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [dateBirth, setDateBirth] = useState(new Date());
  const [licenceDate, setLicenceDate] = useState(new Date());
  const [person, setPerson] = useState({
    name: "",
    surname: "",
    email: "",
    birthDate: "",
    licenceType: "",
    licenceGivenDate: "",
    number: "",
    address: "",
    branch: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
  }

  const handleChange = (e) => {
    setPerson((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="customer-profile">
      <div className="profile-image" style={{marginTop:"3%"}}>
        <img src={profileImage} alt="" />
        <br></br>
        <a href="#">Remove Image </a>
        <br></br>
        <a href="#">Change Image</a>

        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            value={oldPassword}
            placeholder="Old Password"
            onChange={(e) => setOldPassword(e.target.value)}
            style={{ marginTop: "20px" }}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            value={newPassword}
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
            style={{ marginTop: "10px" }}
          />
        </Form.Group>
        <br></br>
        <Button variant="secondary" style={{ backgroundColor: "black" }}>
          Change Password
        </Button>
      </div>

      <div className="profile-information" style={{marginTop:"5%"}}>
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
          </Form.Group>

          <div>
            <label
              style={{
                marginTop: "5px",
                marginBottom: "5px",
                fontWeight: "bold",
                color: "grey",
                fontStyle: "italic",
              }}
            >
              Brith Day
            </label>

            <DatePicker
              selected={dateBirth}
              onChange={(date) => setDateBirth(date)}
            />
          </div>

          <Form.Group size="lg" controlId="licence">
            <Form.Control
              autoFocus
              type="text"
              name="licenceType"
              value={person.licenceType}
              placeholder="LicenceType"
              onChange={handleChange}
              style={{ marginTop: "20px" }}
            />
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
            <br />
            <DatePicker
              selected={licenceDate}
              onChange={(date) => setLicenceDate(date)}
            />
          </div>
          <Form.Group size="lg" controlId="number">
            <Form.Control
              autoFocus
              type="number"
              name=""
              value={person.number}
              placeholder="Contact Number"
              onChange={handleChange}
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
              onChange={handleChange}
              style={{ marginTop: "20px" }}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="branch">
            <Form.Control
              autoFocus
              type="text"
              name="branch"
              value={person.branch}
              placeholder="Branch"
              onChange={handleChange}
              style={{ marginTop: "20px" }}
            />
          </Form.Group>
          <br></br>
          <Button variant="secondary" style={{ backgroundColor: "red" }}>
            Save Changes
          </Button>
        </Form>
      </div>
      <div className="rental-information">
        <h3
          style={{
            marginTop: "0 auto",
            marginBottom: "5%",
            marginLeft: "20%",
            fontWeight: "bold",
            color: "black",
            fontStyle: "italic",
          }}
        >
          Previous Rental Information
        </h3>
        <div className="carInformation">
          <div className="image">
            <img
              src={bmwI8}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                display: "block",
                margin: "auto",
              }}
            />
          </div>
          <div className="information" style={{marginLeft: "5%"}}>
            Car Brand
            <br />
            Car Model
            <br />
            Color
            <br />
            Total Fee
            <br />
            Rented/Transported Dates
            <br />
            Car Rental Condition
            <br />
            Feedback
            <br />
            Rental Type
          </div>
        </div>
        <div className="carInformation" >
          <div className="image">
            <img
              src={bmwI8}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                display: "block",
                margin: "auto",
              }}
            />
          </div>
          <div className="information"  style={{marginLeft: "5%"}}>
            Car Brand
            <br />
            Car Model
            <br />
            Color
            <br />
            Total Fee
            <br />
            Rented/Transported Dates
            <br />
            Car Rental Condition
            <br />
            Feedback
            <br />
            Rental Type
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
