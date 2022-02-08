/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useEffect } from "react";
import "./AddCarPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Popup from "../popUp/Popup";
import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "antd";
import { Select } from "antd";
const { Search } = Input;

const { Option } = Select;

function AddTransportation() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");

  const [car, setCar] = useState({
    brand: "",
    model: "",
    plate: "",
    permitSerialNumber: "",
    insuranceSerialNumber: "",
    seatingCapacity: "",
    kmPrice: "",
    vehicleType: "",
    treat: "",
  });
  const [branchName, setBranchName] = useState("");
  const [popUp, setPopUp] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const getBranchName = () => {
      let managerEmail = localStorage.getItem("managerEmail");
      fetch(
        `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getmanagersbranch?email=${managerEmail}
        `
      )
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setBranchName(result.body["branch_name"]);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };
    getBranchName();
  }, []);
  const handleChangeTransportationVehicle = (e) => {
    setCar((prevValues) => {
      return {
        ...prevValues,
        vehicleType:
          e === "business_XL"
            ? "business_XL"
            : e === "taxi"
            ? "taxi"
            : "ride_XL",
      };
    });
  };
  function handleSubmit(event) {
    if (
      car.brand.length > 0 &&
      car.model.length > 0 &&
      car.plate.length > 0 &&
      car.permitSerialNumber.length > 0 &&
      car.insuranceSerialNumber.length > 0 &&
      car.seatingCapacity.length > 0 &&
      car.kmPrice.length > 0
    ) {
      fetch(
        `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/addtransportationvehicletobranch?plate=${car.plate}&permit_serial_number=${car.permitSerialNumber}&insurance_serial_number=${car.insuranceSerialNumber}&brand_name=${car.brand}&model_name=${car.model}&capacity=${car.seatingCapacity}&km_price=${car.kmPrice}&vehicle_type=${car.vehicleType}&branch_name=${branchName}&treat=${car.treat}

        `
      )
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoaded(true);
            if (result.body["message"] === "executionTrue") {
              setMessage("Transportation Vehicle Creation is Successfull");
              clickHandler();
              setTimeout(() => navigate("/ManagerMainPage"), 2000);
            } else if (result.body["message"] === "executionFalse") {
              setMessage("Transportation Vehicle Creation is not Successfull");
              clickHandler();
            } else {
              setMessage("Database connection get error ");
              clickHandler();
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }
  const clickHandler = () => {
    setPopUp(true);
  };

  const handleChange = (e) => {
    setCar((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="AddCarPage" id="addCarPageCSS">
      <div className="carImage">
        <img
          style={{ width: "100%" }}
          src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png"
        />
        <div className="editImage">
          <span>
            {" "}
            <a href="#">Remove Image</a>
          </span>{" "}
          |{" "}
          <span>
            <a href="#">Change Image</a>
          </span>
        </div>
      </div>
      <div className="carInfoForm">
        <div className="carInfoColumn">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="brand">
              <Form.Control
                autoFocus
                type="text"
                name="brand"
                value={car.brand}
                placeholder="Brand Name"
                onChange={handleChange}
                style={{ marginTop: "5px" }}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="model">
              <Form.Control
                autoFocus
                type="text"
                name="model"
                value={car.model}
                placeholder="Model"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="plate">
              <Form.Control
                autoFocus
                type="text"
                name="plate"
                value={car.plate}
                placeholder="Plate"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="permitSerialNumber">
              <Form.Control
                type="number"
                name="permitSerialNumber"
                value={car.permitSerialNumber}
                placeholder="Permit Serial Number"
                onChange={handleChange}
                style={{ marginTop: "20px", marginBottom: "10px" }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="insuranceSerialNumber">
              <Form.Control
                type="number"
                name="insuranceSerialNumber"
                value={car.insuranceSerialNumber}
                placeholder="Insurance Serial Number"
                onChange={handleChange}
                style={{ marginTop: "20px", marginBottom: "10px" }}
              />
            </Form.Group>
          </Form>
        </div>

        <div className="carInfoColumn">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="branch">
              <Form.Control
                autoFocus
                type="text"
                name="branch"
                value={branchName}
                placeholder={branchName}
                disabled={true}
                style={{ marginTop: "5px" }}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="kmPrice">
              <Form.Control
                autoFocus
                type="number"
                name="kmPrice"
                value={car.kmPrice}
                placeholder="Kilometer Price"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="seatingCapacity">
              <Form.Control
                autoFocus
                type="number"
                name="seatingCapacity"
                value={car.seatingCapacity}
                placeholder="Seating Capacity"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="treat">
              <Form.Control
                autoFocus
                type="text"
                name="treat"
                value={car.treat}
                placeholder="Treat"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>

            <div style={{ marginTop: "20px" }}>
              <Select
                defaultValue="Business-XL"
                style={{ width: 200 }}
                name="vehicleType"
                onChange={handleChangeTransportationVehicle}
              >
                <Option value="business_XL">Business-XL</Option>
                <Option value="taxi">Taxi</Option>
                <Option value="ride_XL">Ride-XL</Option>
              </Select>
            </div>

            <div className="AddButton" onClick={handleSubmit}>
              <Button
                variant="secondary"
                style={{ backgroundColor: "black", width: "150px" }}
              >
                Create Transportation Vehicle
              </Button>
            </div>
          </Form>
          <div
            className="AddButton"
            onClick={() => {
              navigate("/AddCarPage");
            }}
          >
            <Button
              variant="secondary"
              style={{ backgroundColor: "black", width: "150px" }}
            >
              Create Car
            </Button>
          </div>
        </div>
      </div>

      <Popup trigger={popUp} setPopUp={setPopUp} message={message} />
    </div>
  );
}

export default AddTransportation;
