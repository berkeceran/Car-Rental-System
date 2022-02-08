/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ManagerMainPage.css";
import { LeftCircleOutlined } from "@ant-design/icons";
import { RightCircleOutlined } from "@ant-design/icons";
import "./TransportationInformation.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function TransportationInformation(props) {
  const {
    plate,
    permitSerialNumber,
    insuranceSerialNumber,
    brandName,
    modelName,
    capacity,
  } = props.vehicle;
  return (
    <div className="CarsInformation">
      <Container>
        <Row style={{ display: "inline-block" }}>
          <img src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png" />
          <Col>
            <div className="CarDetails">
              <ul class="gonext">
                <li>
                  Plate: <span style={{ color: "red" }}>{plate} </span>
                </li>
                <li>
                  Permit Serial Number:{" "}
                  <span style={{ color: "red" }}>{permitSerialNumber}</span>
                </li>
                <li>
                  Insurance Serial Number:{" "}
                  <span style={{ color: "red" }}>{insuranceSerialNumber}</span>
                </li>
                <li>
                  Brand Name: <span style={{ color: "red" }}>{brandName}</span>
                </li>
                <li>
                  Model Name: <span style={{ color: "red" }}>{modelName}</span>
                </li>
                <li>
                  Capacity: <span style={{ color: "red" }}>{capacity}</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TransportationInformation;
