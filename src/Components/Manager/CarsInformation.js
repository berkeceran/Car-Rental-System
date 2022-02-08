/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ManagerMainPage.css";
import { LeftCircleOutlined } from "@ant-design/icons";
import { RightCircleOutlined } from "@ant-design/icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./CarsInformation.css";

function CarsInformation(props) {
  const {
    brand,
    model,
    currentKm,
    carCondition,
    carStatus,
    color,
    deposit,
    description,
    fee,
    fuelConsuptionRate,
    fuelConsuptionType,
    insuranceSerialNumber,
    permitSerialNumber,
    plate,
    productionYear,
    seatingCapacity,
    transmissionType,
  } = props.car;
  return (
    <div className="CarsInformation">
      <Container>
        <Row style={{display:"inline-block"}}>

            <img src="https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/amg-gt/roadster/_jcr_content/image.MQ6.2.2x.20200318130703.png" style={{widht:"20%", height:"30%"}} />
   
            <Col>
              <div className="CarDetails">
                <ul class="gonext"> 
                  <li>Car Brand: <span style={{color:"red"}}>{brand}</span></li>
                  <li>Car Model: <span style={{color:"red"}}>{model}</span></li>
                  <li>Car Color: <span style={{color:"red"}}>{color}</span></li>
                  <li>Fee: <span style={{color:"red"}}>{fee}</span></li>
                  <li>Current Km: <span style={{color:"red"}}>{currentKm}</span></li>
                  <li>Permit Serial Number: <span style={{color:"red"}}>{permitSerialNumber}</span></li>
                  <li>Insurance Serial Number: <span style={{color:"red"}}>{insuranceSerialNumber}</span></li>
                  <li>Fuel Consuption Rate: <span style={{color:"red"}}>{fuelConsuptionRate}</span></li>
                  <li>Fuel Consuption Type: <span style={{color:"red"}}>{fuelConsuptionType}</span></li>
                  <li>Car Condition: <span style={{color:"red"}}>{carCondition}</span></li>
                  <li>Car Status: <span style={{color:"red"}}>{carStatus}</span></li>
                  <li>Car Deposit: <span style={{color:"red"}}>{deposit}</span></li>         
                  <li>Car Description: <span style={{color:"red"}}>{description}</span></li>         
                  <li>Car Plate: <span style={{color:"red"}}>{plate}</span></li>
                  <li>Car Production Year: <span style={{color:"red"}}>{productionYear}</span></li>
                  <li>Car Seating Capacity: <span style={{color:"red"}}>{seatingCapacity}</span></li>
                  <li>Transmission Type: <span style={{color:"red"}}>{transmissionType}</span></li>
                </ul>
              </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CarsInformation;
