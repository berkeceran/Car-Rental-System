/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import "./ManagerMainPage.css";

function EmployeeInformation(props) {
  const { name, surname, email, status, employeeId } = props.employee;

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div
      className="EmployeeInformation"
    >
      <div
        className="nameSurname"
        style={{ margin: "auto", width: "50%", border: "3px", padding: "10px" }}
      >
        <img
          style={{ margin: "auto", width: "50%", padding: "10px" }}
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
        ></img>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="name">
            <Form.Control
              className="text-center"
              autoFocus
              type="text"
              name="name"
              value={name}
              placeholder="Name: "
              style={{ marginTop: "5px"}}
              disabled
            />
          </Form.Group>

          <Form.Group size="lg" controlId="surname">
            <Form.Control
              className="text-center"
              autoFocus
              type="text"
              name="surname"
              value={surname}
              placeholder="Surname: "
              style={{ marginTop: "20px"}}
              disabled
            />
          </Form.Group>

          <Form.Group size="lg" controlId="email">
            <Form.Control
              className="text-center"
              autoFocus
              type="text"
              name="email"
              value={email}
              placeholder="Email: "
              style={{ marginTop: "20px"}}
              disabled
            />
          </Form.Group>

          <Form.Group size="lg" controlId="Employee Type">
            <Form.Control
              className="text-center"
              autoFocus
              type="text"
              name="employeeType"
              value={status}
              placeholder="Employee Type: "
              style={{ marginTop: "20px"}}
              disabled
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default EmployeeInformation;
