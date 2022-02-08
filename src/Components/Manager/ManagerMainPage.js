/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import "./ManagerMainPage.css";
import CarsInformation from "./CarsInformation";
import EmployeeInformation from "./EmployeeInformation";
import TransportationInformation from "./TransportationInformation";
import Button from "react-bootstrap/Button";

function ManagerMainPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cars, setCars] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [transportationVehicles, setTransportationVehicles] = useState([]);
  const [bestEmployees, setBestEmployees] = useState([]);
  const [worstEmployees, setWorstEmployees] = useState([]);
  let managerId = localStorage.getItem("managerId");
  let managerEmail = localStorage.getItem("managerEmail");
  useEffect(() => {
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getallcar?manager_id=${managerId}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        if (result.body.cars) {
          const myCars = result.body.cars.map((car) => ({
            brand: car[0],
            model: car[1],
            currentKm: car[2],
            plate: car[3],
            carStatus: car[4],
            permitSerialNumber: car[5],
            insuranceSerialNumber: car[6],
            carCondition: car[7],
            color: car[8],
            fuelConsuptionType: car[9],
            fuelConsuptionRate: car[10],
            seatingCapacity: car[11],
            productionYear: car[12],
            description: car[13],
            fee: car[14],
            deposit: car[15],
            transmissionType: car[16],
          }));
          setCars(myCars);
        }
      });
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getallemployee?manager_id=${managerId}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        if (result.body.employees) {
          const myEmployees = result.body.employees.map((employee) => ({
            employeeId: employee[0],
            name: employee[1],
            surname: employee[2],
            email: employee[3],
            status: employee[4],
          }));
          setEmployees(myEmployees);
        }
      });
    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getalltransportationvehicleforbranch?email=${managerEmail}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        if (result.body.vehicles) {
          const myVehicles = result.body.vehicles.map((vehicle) => ({
            plate: vehicle[0],
            permitSerialNumber: vehicle[1],
            insuranceSerialNumber: vehicle[2],
            brandName: vehicle[3],
            modelName: vehicle[4],
            capacity: vehicle[5],
          }));
          setTransportationVehicles(myVehicles);
        }
      });

    fetch(
      `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/getbestandworstemployee?email=${managerEmail}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        if (result.body.best_employees) {
          const myBest = result.body.best_employees.map((best) => ({
            name: best[0],
            surname: best[1],
          }));
          setBestEmployees(myBest);
        }
        if (result.body.worst_employees) {
          const myWorst = result.body.worst_employees.map((worst) => ({
            name: worst[0],
            surname: worst[1],
          }));
          setWorstEmployees(myWorst);
        }
      });
  }, [managerId, managerEmail]);

  return (
    <div className="ManagerMainPage">
      <div className="TopRow">
        <Button
          variant="secondary"
          style={{ backgroundColor: "black", marginBottom: "5%" }}
          href="/AddCarPage"
        >
          Add Car
        </Button>
        <Button
          variant="secondary"
          style={{
            backgroundColor: "green",
            marginLeft: "10px",
            marginBottom: "5%",
          }}
          href="/CreateEmployeePage"
        >
          Create Employee
        </Button>
      </div>
      <div className="ManagerMainPageColumns">
        <div className="CarsColumn">
          <h2 style={{ width: "100%", textAlign: "center" }}>CARS</h2>{" "}
          {cars && cars.map((car) => <CarsInformation car={car} />)}
        </div>
        <div className="TransportationColumn">
          <h2 style={{ width: "100%", textAlign: "center" }}>
            {" "}
            TRANSPORTATION VEHICLES
          </h2>
          {transportationVehicles &&
            transportationVehicles.map((vehicle) => (
              <TransportationInformation vehicle={vehicle} />
            ))}
        </div>
        <div className="Employees">
          <h2 style={{ width: "100%", textAlign: "center" }}> EMPLOYEES</h2>
          <h4 style={{ color: "red", marginLeft: "7%", marginTop: "7%" }}>
            Best Employee:&nbsp;
            {bestEmployees &&
              bestEmployees.map((best) => (
                <span style={{ color: "black" }}>
                  {best.name} {best.surname}{" "}
                </span>
              ))}
          </h4>
          <h4 style={{ color: "red", marginLeft: "7%" }}>
            Worst Employees:&nbsp;
            {worstEmployees &&
              worstEmployees.map((worst) => (
                <span style={{ color: "black" }}>
                  {worst.name} {worst.surname}
                  {" ,"}
                </span>
              ))}
          </h4>
          {employees &&
            employees.map((employee) => (
              <EmployeeInformation employee={employee} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ManagerMainPage;
