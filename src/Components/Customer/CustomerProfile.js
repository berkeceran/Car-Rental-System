/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useEffect } from "react";
import "./customerProfile.css";
import profileImage from "../../images/profile.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Popup from "../popUp/Popup";
import bmwI8 from "../../images/bmw-i8.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useLocation, useNavigate } from "react-router-dom";

function CustomerProfile() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [dateBirth, setDateBirth] = useState(new Date());
  const [licenceDate, setLicenceDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  const [nationalId, setNationalId] = useState("");
  const [rentalInformations, setRentalInformations] = useState([]);
  const [person, setPerson] = useState({
    name: "",
    surname: "",
    email: "",
    birth_date: "",
    contact_number: "",
    address: "",
    account_status: "",
    license_type: "",
    given_date: "",
  });

  let customerEmail = localStorage.getItem("customerEmail");
  let customerPassword = localStorage.getItem("customerPassword");
  let customerId = localStorage.getItem("customerId");
  let navigate = useNavigate();

  useEffect(() => {
    let customerEmail = localStorage.getItem("customerEmail");
    let customerPassword = localStorage.getItem("customerPassword");

    const getProfileProperties = (e) => {
      fetch(
        `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/customerprofile?email=${customerEmail}`
      )
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoaded(true);
            result.body &&
              Object.keys(result.body).map((key) => {
                let properties = result.body[key];
                setPerson((prevValues) => {
                  return {
                    ...prevValues,
                    [key]: properties,
                  };
                });
                let birthDate = new Date(result.body.birth_date);
                setDateBirth(birthDate);
                let licence_date = new Date(result.body.given_date);
                setLicenceDate(licence_date);
                return true;
              });
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };
    getProfileProperties();
    const getNationalId = (e) => {
      fetch(
        `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getnationalidofcustomer?email=${customerEmail}
  
      `
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setNationalId(result.body["national_id"]);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };
    getNationalId();
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getrentalinformations?customer_id=${customerId}`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          if (result.body.rentals) {
            const myRentals = result.body.rentals.map((rental) => ({
              brandName: rental[0],
              modelName: rental[1],
              totalFee: rental[2],
              startday: rental[3],
              endDay: rental[4],
              afterCarRentCondition: rental[5],
              feedback: rental[6],
              branchName: rental[7],
            }));
            setRentalInformations(myRentals);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [nationalId, customerId]);

  function handleSubmit(event) {
    event.preventDefault();
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/changeinfocustomer?address=${person.address}&birth_date=${person.birth_date}&contact_number=${person.contact_number}&email=${person.email}&given_date=${person.given_date}&license_type=${person.license_type}&name=${person.name}&national_id=${nationalId}&surname=${person.surname}
      `
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          if (result.body["message"] === "executionTrue") {
            setMessage("Profile Change is Successfull");
            localStorage.setItem("customerEmail", person.email);
            clickHandler();
          } else if (result.body["message"] === "executionFalse") {
            setMessage("Profile Change is Unsuccessfull !!!!!!!");
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
  }

  const handleChange = (e) => {
    setPerson((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleChangePassword = (e) => {
    if (customerPassword === oldPassword) {
      fetch(
        `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/changepassword?email=${customerEmail}&old_password=${oldPassword}&new_password=${newPassword}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);

            if (result.body["message"] === "executionTrue") {
              setMessage("Password Change is Successfull");
              localStorage.setItem("customerPassword", newPassword);
              setOldPassword("");
              setNewPassword("");
              clickHandler();
            } else if (result.body["message"] === "executionFalse") {
              setMessage("Password Change is Unsuccessfull !!!!!!!");
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
      setMessage("Old password is wrong");
      clickHandler();
    }
  };

  if (person.name === "") {
    return (
      <div
        style={{
          margin: "auto",
          width: "50%",
          padding: "10px",
          marginTop: "25%",
        }}
      >
        <ProgressBar animated now={45} style={{ height: "75px" }} />
      </div>
    );
  }

  const clickHandler = () => {
    setPopUp(true);
  };

  return (
    <div className="customer-profile" id="customerProfileCSS">
      <div className="profile-image" style={{ marginTop: "3%" }}>
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
        <Button
          variant="secondary"
          style={{ backgroundColor: "black" }}
          onClick={handleChangePassword}
        >
          Change Password
        </Button>
      </div>

      <div className="profile-information" style={{ marginTop: "5%" }}>
        <Form>
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

          <Form.Group size="lg" controlId="account_status">
            <Form.Control
              autoFocus
              type="text"
              name="account_status"
              value={person.account_status}
              disabled={true}
              placeholder="person.account_status"
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
              Birth Day
            </label>

            <DatePicker
              readOnly={true}
              selected={dateBirth}
              dateFormat={"dd/MM/yyyy"}
              onChange={(date) => setDateBirth(date)}
            />
          </div>

          <Form.Group size="lg" controlId="license_type">
            <Form.Control
              autoFocus
              type="text"
              name="license_type"
              value={person.license_type}
              placeholder="Licence Type"
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
              readOnly={true}
              selected={licenceDate}
              dateFormat={"dd/MM/yyyy"}
              onChange={(date) => setLicenceDate(date)}
            />
          </div>
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
          <br></br>
          <Button
            variant="secondary"
            style={{ backgroundColor: "red" }}
            onClick={handleSubmit}
          >
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
        {rentalInformations.length > 0 ? (
          rentalInformations &&
          rentalInformations.map((rental) => (
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
              <div className="information" style={{ marginLeft: "5%" }}>
                Car Brand {rental.brandName}
                <br />
                Car Model {rental.modelName}
                <br />
                Total Fee {rental.totalFee}
                <br />
                Start Day {rental.startday}
                <br />
                End Day {rental.endDay}
                <br />
                Car Rental Condition {rental.afterCarRentCondition}
                <br />
                Feedback {rental.feedback}
                <br />
                Branch Name {rental.branchName}
              </div>
            </div>
          ))
        ) : (
          <label
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              marginLeft: "75px",
              fontWeight: "bold",
              color: "grey",
              fontStyle: "italic",
            }}
          >
            There is no previous rental information for this customer
          </label>
        )}
      </div>
      <Popup trigger={popUp} setPopUp={setPopUp} message={message} />
    </div>
  );
}

export default CustomerProfile;
