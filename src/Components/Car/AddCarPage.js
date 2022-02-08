/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useEffect } from "react";
import "./AddCarPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Popup from "../popUp/Popup";
import { useLocation, useNavigate } from "react-router-dom";

function AddCarPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");

  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    currentKm: "",
    plate: "",
    fee: "",
    permitSerialNumber: "",
    insuranceSerialNumber: "",
    carCondition: "",
    fuelConsuptionType: "",
    fuelConsuptionRate: "",
    seatingCapacity: "",
    productionYear: "",
    description: "",
    deposit: "",
    transmissionType: "",
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
  function handleSubmit(event) {
    if (
      car.brand.length > 0 &&
      car.model.length > 0 &&
      car.color.length > 0 &&
      car.currentKm.length > 0 &&
      car.plate.length > 0 &&
      car.fee.length > 0 &&
      car.permitSerialNumber.length > 0 &&
      car.insuranceSerialNumber.length > 0 &&
      car.carCondition.length > 0 &&
      car.fuelConsuptionRate.length > 0 &&
      car.fuelConsuptionType.length > 0 &&
      car.seatingCapacity.length > 0 &&
      car.productionYear.length > 0 &&
      car.description.length > 0 &&
      car.deposit.length > 0 &&
      car.transmissionType.length > 0
    ) {
      fetch(
        `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/addcartobranch?brand_name=${car.brand}&model_name=${car.model}&current_km_value=${car.currentKm}&plate=${car.plate}&permit_serial_number=${car.permitSerialNumber}&insurance_serial_number=${car.insuranceSerialNumber}&car_condition=${car.carCondition}&color=${car.color}&fuel_consumption_type=${car.fuelConsuptionType}&fuel_consumption_rate=${car.fuelConsuptionRate}&seating_capacity=${car.seatingCapacity}&production_year=${car.productionYear}&description=${car.description}&car_daily_fee=${car.fee}&car_deposit=${car.deposit}&transmission_type=${car.transmissionType}&branch_name=${branchName}
        `
      )
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoaded(true);
            if (result.body["message"] === "executionTrue") {
              setMessage("Car  Creation is Successfull");
              clickHandler();
              setTimeout(() => navigate("/ManagerMainPage"), 2000);
            } else if (result.body["message"] === "executionFalse") {
              setMessage("Car Creation is not Successfull");
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

            <Form.Group size="lg" controlId="color">
              <Form.Control
                autoFocus
                type="text"
                name="color"
                value={car.color}
                placeholder="Color"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="currentKm">
              <Form.Control
                autoFocus
                type="number"
                name="currentKm"
                value={car.currentKm}
                placeholder="Current Km"
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
            <Form.Group size="lg" controlId="Current Fee">
              <Form.Control
                type="number"
                value={car.fee}
                name="fee"
                placeholder="Current Fee"
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
            <Form.Group size="lg" controlId="carCondition">
              <Form.Control
                type="text"
                name="carCondition"
                value={car.carCondition}
                placeholder="Car Condition "
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
            <Form.Group size="lg" controlId="fuelConsuptionType">
              <Form.Control
                autoFocus
                type="text"
                name="fuelConsuptionType"
                value={car.fuelConsuptionType}
                placeholder="Fuel Consuption Type"
                onChange={handleChange}
                style={{ marginTop: "5px" }}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="fuelConsuptionRate">
              <Form.Control
                autoFocus
                type="text"
                name="fuelConsuptionRate"
                value={car.fuelConsuptionRate}
                placeholder="Fuel Consuption Rate"
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

            <Form.Group size="lg" controlId="productionYear">
              <Form.Control
                autoFocus
                type="number"
                name="productionYear"
                value={car.productionYear}
                placeholder="Production Year"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="description">
              <Form.Control
                autoFocus
                type="text"
                name="description"
                value={car.description}
                placeholder="Description"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="deposit">
              <Form.Control
                type="number"
                value={car.deposit}
                name="deposit"
                placeholder="Deposit"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="transmissionType">
              <Form.Control
                type="text"
                name="transmissionType"
                value={car.transmissionType}
                placeholder="Transmission Type"
                onChange={handleChange}
                style={{ marginTop: "20px", marginBottom: "10px" }}
              />
            </Form.Group>
            <div className="AddButton" onClick={handleSubmit}>
              <Button
                variant="secondary"
                style={{ backgroundColor: "black", width: "150px" }}
              >
                Create Car
              </Button>
            </div>
            <div
              className="AddButton"
              onClick={() => {
                navigate("/AddTransportation");
              }}
            >
              <Button
                variant="secondary"
                style={{ backgroundColor: "black", width: "150px" }}
              >
                Create Transportation Vehicle
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <Popup trigger={popUp} setPopUp={setPopUp} message={message} />
    </div>
  );
}

export default AddCarPage;
