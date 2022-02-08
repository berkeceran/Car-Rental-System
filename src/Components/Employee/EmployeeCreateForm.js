import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";

function EmployeeCreateForm(){
    const [type, setType]: any = useState('');
    const [customer, setCustomer] = useState({
        name: "",
        surname: "",
        email: "",
      });

      /**
      
      const rentalTypes = ["Premium", "Normal"]

      const rentalTypeOptions = rentalTypes.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        )
      })

      const branches = ["Ankara", "İstanbul", "İzmir"]

      const branchOptions = branches.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        )
      })
       */
    
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());

    const [selectedAccessories, setSelectedAccessories] = useState([]);

    const handleSelect = function(selectedItems) {
        const accessories = [];
        for (let i=0; i<selectedItems.length; i++) {
            accessories.push(selectedItems[i].value);
        }
        setSelectedAccessories(accessories);
    }

    return(

        <div className="createFormPage">
            <Container>
                <Row>
                    <Col style={{marginTop:"3%"}}>
                        <h2> Customer Info </h2>
                        <Form>
                            <Form.Group size="lg" controlId="name" style={{marginTop:"45px"}}>
                                <Form.Control
                                autoFocus
                                type="text"
                                name="name"
                                value={customer.name}
                                placeholder="Name"
                                //onChange={handleChange}
                                style={{ marginTop: "5px" }}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="surname">
                                <Form.Control
                                autoFocus
                                type="text"
                                name="surname"
                                value={customer.surname}
                                placeholder="Surname"
                                //onChange={handleChange}
                                style={{ marginTop: "5px" }}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="email">
                                <Form.Control
                                autoFocus
                                type="text"
                                name="email"
                                value={customer.surname}
                                placeholder="Email"
                                //onChange={handleChange}
                                style={{ marginTop: "5px" }}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col style={{marginTop:"3%"}}>
                        <h2> Car Info </h2>
                        <div style={{ marginTop: "20px", alignItems: "left" }}>
                            <label
                                style={{
                                marginTop: "5px",
                                color: "",
                                fontStyle: "",
                                }}
                            >
                                Start Date
                            </label>
                            <DatePicker
                                dateFormat={"dd/MM/yyyy"}
                                selected={startDate}
                                onChange={(date) => setstartDate(date)}
                            />
                        </div>
                        <div style={{alignItems: "left" }}>
                            <label
                                style={{
                                color: "",
                                marginTop: "5px",
                                fontStyle: "",
                                }}
                            >
                                End Date
                            </label>
                            <DatePicker
                                dateFormat={"dd/MM/yyyy"}
                                selected={endDate}
                                onChange={(date) => setendDate(date)}
                            />
                        </div>
                        <Form.Group size="lg" controlId="rentalType">
                            <Form.Label>Rental Type</Form.Label>
                            <Form.Control
                                as="select"
                                value={type}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setType(e.target.value);
                                }}
                                >
                                <option value="Normal">Normal</option>
                                <option value="Premium">Premium</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group size="lg" controlId="rentalType">
                            <Form.Label>Given Branch</Form.Label>
                            <Form.Control
                                as="select"
                                value={type}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setType(e.target.value);
                                }}
                                >
                                <option value="Ankara">Ankara</option>
                                <option value="İstanbul">İstanbul</option>
                                <option value="İzmir">İzmir</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group size="lg" controlId="rentalType">
                            <Form.Label>Returned Branch</Form.Label>
                            <Form.Control
                                as="select"
                                value={type}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setType(e.target.value);
                                }}
                                >
                                <option value="Ankara">Ankara</option>
                                <option value="İstanbul">İstanbul</option>
                                <option value="İzmir">İzmir</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group size="lg" controlId="rentalType">
                            <Form.Label>Insurance</Form.Label>
                            <Form.Control
                                as="select"
                                value={type}
                                onChange={e => {
                                    console.log("e.target.value", e.target.value);
                                    setType(e.target.value);
                                }}
                                >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Accessories</Form.Label>
                            <Form.Control
                                as="select"
                                multiple
                                // value={formCatState}
                                onChange={(event) => {
                                let target = event.target 
                                console.log(target.selectedOptions);
                                }}
                            >
                                <option>example  1</option>
                                <option>Example  2</option>
                                <option>Example  3</option>
                                <option>Example  4</option>
                                <option>Example  4</option>
                                <option>Example  4</option>
                                <option>Example  4</option>
                            </Form.Control>
                                <Form.Text muted> Hold ctrl or command for multiple select</Form.Text>
                        </Form.Group>
                        <Form.Group size="lg" controlId="rentalType" style={{marginTop:"5%"}}>
                            <Form.Label>Please select the car </Form.Label>
                            <Button style={{marginLeft:"10%"}}>Choose Car</Button>
                        </Form.Group>

                        <Button  style={{ marginTop:"8%", marginLeft:"40%", widht:"370px", height:"60px", backgroundColor:"red", padding:"10px"}}> RENT CAR </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default EmployeeCreateForm;