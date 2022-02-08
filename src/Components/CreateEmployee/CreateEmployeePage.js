/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { React, useState, useEffect } from "react";
import "./CreateEmployeePage.css";
import { Radio } from "antd";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from "react-router-dom";
import Popup from "../popUp/Popup";
import { Input } from "antd";
import { Select } from "antd";
const { Search } = Input;

const { Option } = Select;

function CreateEmployeePage() {
  const [value, setValue] = useState(1);
  const [dateBirth, setDateBirth] = useState(new Date());
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [message, setMessage] = useState("");
  const [branchName, setBranchName] = useState("");
  const [person, setPerson] = useState({
    name: "",
    surname: "",
    email: "",
    birthDate: "",
    nationalId: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    address: "",
    salary: "",
    shiftHours: "",
    allowedLeaveNumber: "",
    workHoursPerDay: "",
    employeeType: "employee",
    gender: "female",
  });

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
      person.name.length > 0 &&
      person.surname.length > 0 &&
      person.email.length > 0 &&
      person.nationalId.length > 0 &&
      person.password.length > 0 &&
      person.confirmPassword.length > 0 &&
      person.address.length > 0 &&
      person.contactNumber.length > 0 &&
      person.salary.length > 0 &&
      person.allowedLeaveNumber.length > 0 &&
      person.workHoursPerDay.length > 0
    ) {
      if (person.password === person.confirmPassword) {
        event.preventDefault();
        person.birthDate = `${dateBirth.getFullYear()}-${
          dateBirth.getMonth() + 1
        }-${dateBirth.getDate()}`;

        if (person.employeeType === "employee") {
          fetch(
            `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/addemployeetobranch?name=${person.name}&surname=${person.surname}&date=${person.birthDate}&national_id=${person.nationalId}&email=${person.email}&password=${person.password}&address=${person.address}&contact_number=${person.contactNumber}&gender=${person.gender}&salary=${person.salary}&allowed_leave_number=${person.allowedLeaveNumber}&work_hours_per_day=${person.workHoursPerDay}&branch_name=${branchName}`
          )
            .then((response) => response.json())
            .then(
              (result) => {
                setIsLoaded(true);
                if (result.body["message"] === "executionTrue") {
                  setMessage("Employee Creation is Successfull");
                  clickHandler();
                  setTimeout(() => navigate("/ManagerMainPage"), 2000);
                } else if (result.body["message"] === "executionFalse") {
                  setMessage("Employee Creation is not Successfull");
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
        } else {
          fetch(
            `https://jjkk5chlhg.execute-api.eu-central-1.amazonaws.com/prod/adddrivertobranch?name=${person.name}&surname=${person.surname}&date=${person.birthDate}&national_id=${person.nationalId}&gender=${person.gender}&email=${person.email}&password=${person.password}&address=${person.address}&contact_number=${person.contactNumber}&salary=${person.salary}&allowed_leave_number=${person.allowedLeaveNumber}&work_hours_per_day=${person.workHoursPerDay}&branch_name=${branchName}&shift_hours=${person.shiftHours}
            `
          )
            .then((response) => response.json())
            .then(
              (result) => {
                setIsLoaded(true);
                console.log(result.body);
                if (result.body["message"] === "executionTrue") {
                  setMessage("Driver Creation is Successfull");
                  clickHandler();
                  setTimeout(() => navigate("/ManagerMainPage"), 2000);
                } else if (result.body["message"] === "executionFalse") {
                  setMessage("Driver Creation is not Successfull");
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
      } else {
        setMessage("Password and Confirm Password Should Be Same");
        clickHandler();
      }
    } else {
      setMessage("You should fill all the blanks");
      clickHandler();
    }
  }
  const clickHandler = () => {
    setPopUp(true);
  };
  const handleChange = (e) => {
    setPerson((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleChangeemployeeType = (e) => {
    setPerson((prevValues) => {
      return {
        ...prevValues,
        employeeType: e === "Driver" ? "driver" : "employee",
      };
    });
  };
  const onChange = (e) => {
    setValue(e.target.value);
    setPerson((prevValues) => {
      return {
        ...prevValues,
        gender: value === 1 ? "male" : "female",
      };
    });
  };

  return (
    <div className="CreateEmployeePage">
      <div className="EmployeeImage">
        <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" />
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
      <div className="EmployeeInformationForm">
        <div className="EmployeeInformationColumn">
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

            <Form.Group size="lg" controlId="contactNumber">
              <Form.Control
                autoFocus
                type="number"
                name="contactNumber"
                value={person.contactNumber}
                placeholder="Contact Number"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="nationalId">
              <Form.Control
                autoFocus
                type="number"
                name="nationalId"
                value={person.nationalId}
                placeholder="National Id"
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
                Birth Day
              </label>

              <DatePicker
                selected={dateBirth}
                onChange={(date) => setDateBirth(date)}
              />
            </div>
            <Form.Group size="lg" controlId="password">
              <Form.Control
                type="password"
                value={person.password}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="confirmPassword">
              <Form.Control
                type="password"
                name="confirmPassword"
                value={person.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChange}
                style={{ marginTop: "20px", marginBottom: "10px" }}
              />
            </Form.Group>
          </Form>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Female</Radio>
            <Radio value={2}>Male</Radio>
          </Radio.Group>
        </div>

        <div className="EmployeeInformationColumn">
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
            <Form.Group size="lg" controlId="address">
              <Form.Control
                type="text"
                name="address"
                value={person.address}
                placeholder="Address"
                onChange={handleChange}
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
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="allowedLeaveNumber">
              <Form.Control
                autoFocus
                type="number"
                name="allowedLeaveNumber"
                value={person.allowedLeaveNumber}
                placeholder="Allowed Leave Number"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="workHoursPerDay">
              <Form.Control
                autoFocus
                type="number"
                name="workHoursPerDay"
                value={person.workHoursPerDay}
                placeholder="Work Hours Per Day"
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />
            </Form.Group>
            <div style={{ marginTop: "20px" }}>
              <Select
                defaultValue="Employee"
                style={{ width: 200 }}
                name="employeeType"
                onChange={handleChangeemployeeType}
              >
                <Option value="Employee">Employee</Option>
                <Option value="Driver">Driver</Option>
              </Select>
            </div>
            {person.employeeType === "driver" ? (
              <Form.Group size="lg" controlId="shiftHours">
                <Form.Control
                  autoFocus
                  type="text"
                  name="shiftHours"
                  value={person.shiftHours}
                  placeholder="Shift Hours"
                  onChange={handleChange}
                  style={{ marginTop: "20px" }}
                />
              </Form.Group>
            ) : (
              ""
            )}
            <div className="AddButton" onClick={handleSubmit}>
              <Button
                variant="secondary"
                style={{ backgroundColor: "black", width: "150px" }}
              >
                Create Employee
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Popup trigger={popUp} setPopUp={setPopUp} message={message} />
    </div>
  );
}

export default CreateEmployeePage;
