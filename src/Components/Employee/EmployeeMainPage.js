/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
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

function EmployeeMainPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [info, setInfo] = useState([]);
  const [rentDate, setrentDate] = useState(new Date());
  let employeeId = localStorage.getItem("employeeId");
  const [popUp, setPopUp] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getrequests?employee_id=${employeeId}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        console.log(result.body);
        if (result.body.requests) {
          const infos = result.body.requests.map((request) => ({
            employeeId: request[0],
            customerId: request[1],
            carId: request[2],
            branchId: request[3],
            customerName: request[4],
            customerSurname: request[5],
            carBrand: request[6],
            model: request[7],
            startDate: request[8],
            endDate: request[9],
            customerNationalId: request[10],
            customerLicense: request[11],
            contactNumber: request[12],
          }));
          setInfo(infos);
        }
      });
  }, [employeeId]);

  const handleAccept = (branchId, carId, customerId, startDate, endDate) => {
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/approverequest?branch_id=${branchId}&car_id=${carId}&customer_id=${customerId}&start_day=${startDate}&end_day=${endDate}&employee_id=${employeeId}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        if (result.body["message"] === "There is no such request.") {
          setMessage("There is no such request.");
          clickHandler();
          setTimeout(() => window.location.reload(false), 2000);
        } else if (
          result.body["message"] === "Car is not available on those days."
        ) {
          setMessage("Car is not available on those days.");
          clickHandler();
          setTimeout(() => window.location.reload(false), 2000);
        } else if (result.body["message"] === "Rent is succesfully approved.") {
          setMessage("Rent is succesfully approved.");
          clickHandler();
          setTimeout(() => window.location.reload(false), 2000);
        }
      });
  };
  const handleDecline = (branchId, carId, customerId, startDate, endDate) => {
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/declinerequest?branch_id=${branchId}&car_id=${carId}&customer_id=${customerId}&start_day=${startDate}&end_day=${endDate}&employee_id=${employeeId}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        if (result.body["message"] === "Request succesfully declined.") {
          setMessage("Request succesfully declined.");
          clickHandler();
          setTimeout(() => window.location.reload(false), 2000);
        }
      });
  };
  const clickHandler = () => {
    setPopUp(true);
  };

  return (
    <div className="employeeMain">
      {info &&
        info.map((inf) => (
          <Container>
            <Row
              style={{
                marginTop: "2%",
                border: "2px solid black",
              }}
            >
              <Col>
                <img
                  src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png"
                  alt=""
                />
              </Col>
              <Col>
                <ListGroup variant="flush">
                  <ListGroup.Item
                    controlId="customerName"
                    autoFocus
                    type="text"
                    name="customerName"
                    value={inf.customerName}
                  >
                    Customer Name: {inf.customerName}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="customerSurname"
                    autoFocus
                    type="text"
                    name="customerSurname"
                    value={inf.customerSurname}
                  >
                    Customer Surname : {inf.customerSurname}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="carBrand"
                    autoFocus
                    type="text"
                    name="carBrand"
                    value={inf.carBrand}
                  >
                    Car Brand : {inf.carBrand}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="model"
                    autoFocus
                    type="text"
                    name="model"
                    value={inf.model}
                  >
                    Car Model : {inf.model}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="startDate"
                    autoFocus
                    type="text"
                    name="startDate"
                    value={inf.startDate}
                  >
                    Start Date : {inf.startDate}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="endDate"
                    autoFocus
                    type="text"
                    name="endDate"
                    value={inf.endDate}
                  >
                    End Date : {inf.endDate}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="customerNationalId"
                    autoFocus
                    type="number"
                    name="customerNationalId"
                    value={inf.customerNationalId}
                  >
                    Customer National ID : {inf.customerNationalId}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="customerLicense"
                    autoFocus
                    type="number"
                    name="customerLicense"
                    value={inf.customerLicense}
                  >
                    Customer License : {inf.customerLicense}
                  </ListGroup.Item>
                  <ListGroup.Item
                    controlId="contactNumber"
                    autoFocus
                    type="text"
                    name="contactNumber"
                    value={inf.contactNumber}
                  >
                    Contact Number : {inf.contactNumber}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <Button
                  style={{ marginLeft: "30%", marginTop: "50%" }}
                  block="true"
                  size="lg"
                  type="submit"
                  onClick={() => {
                    handleAccept(
                      inf.branchId,
                      inf.carId,
                      inf.customerId,
                      inf.startDate,
                      inf.endDate
                    );
                  }}
                >
                  Accept
                </Button>
                <Button
                  style={{ marginLeft: "10%", marginTop: "50%" }}
                  block="true"
                  size="lg"
                  type="submit"
                  onClick={() => {
                    handleDecline(
                      inf.branchId,
                      inf.carId,
                      inf.customerId,
                      inf.startDate,
                      inf.endDate
                    );
                  }}
                >
                  Decline
                </Button>
              </Col>
            </Row>
          </Container>
        ))}
      <Popup trigger={popUp} setPopUp={setPopUp} message={message} />
    </div>
  );
}

export default EmployeeMainPage;
