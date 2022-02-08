/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { Input } from "antd";

import Form from "react-bootstrap/Form";
import Figure from "react-bootstrap/Figure";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import img1 from "../../images/audi.jpg";
import img2 from "../../images/bmw.jpg";
import img3 from "../../images/toyota.jpg";
import img4 from "../../images/vw.png";
import audiA3 from "../../images/audi-a3.png";
import bmwI8 from "../../images/bmw-i8.png";
import "antd/dist/antd.css";
import "./customer.css";
import { useLocation, useNavigate } from "react-router-dom";

const { Search } = Input;
const { TextArea } = Input;
function MainPage() {
  const [search, setSearch] = useState("");

  function onSearch(event) {}
  return (
    <div className="fullPage">
      <div className="search-area">
        <Search
          placeholder="Please enter brand"
          style={{ textAlign: "center" }}
          onSearch={onSearch}
          enterButton
        />
      </div>
      <div className="advertisements">
        <Card>
          <div className="advertisements-1">
            <img
              src={img1}
              alt=""
              style={{
                height: "25%",
                width: "25%",
                display: "block",
                margin: "auto",
              }}
            />
            <h6>
              berkeee saopfnsabpo bnoğfsabnopsa bf sabfoğ sabğofbğsa bofsaoğ
              fsğaobnboğf saf{" "}
            </h6>
            <li>item 1</li>
            <li>item 3</li>
            <li>item 2</li>
            <li>item 4</li>
          </div>
        </Card>

        <Card>
          <div className="advertisements-2">
            <img
              src={img1}
              alt=""
              style={{
                height: "25%",
                width: "25%",
                display: "block",
                margin: "auto",
              }}
            />
            <h6>
              berkeee saopfnsabpo bnoğfsabnopsa bf sabfoğ sabğofbğsa bofsaoğ
              fsğaobnboğf saf{" "}
            </h6>
            <li>item 1</li>
            <li>item 3</li>
            <li>item 2</li>
            <li>item 4</li>
          </div>
        </Card>

        <Card>
          <div className="advertisements-3">
            <img
              src={img1}
              alt=""
              style={{
                height: "25%",
                width: "25%",
                display: "block",
                margin: "auto",
              }}
            />
            <h6>
              berkeee saopfnsabpo bnoğfsabnopsa bf sabfoğ sabğofbğsa bofsaoğ
              fsğaobnboğf saf{" "}
            </h6>
            <li>item 1</li>
            <li>item 3</li>
            <li>item 2</li>
            <li>item 4</li>
          </div>
        </Card>

        <Card>
          <div className="advertisements-4">
            <img
              src={img1}
              alt=""
              style={{
                height: "25%",
                width: "25%",
                display: "block",
                margin: "auto",
              }}
            />
            <h6>
              berkeee saopfnsabpo bnoğfsabnopsa bf sabfoğ sabğofbğsa bofsaoğ
              fsğaobnboğf saf{" "}
            </h6>
            <li>item 1</li>
            <li>item 3</li>
            <li>item 2</li>
            <li>item 4</li>
          </div>
        </Card>
      </div>
      <div className="available">
        <div className="car1">
          <img
            src={audiA3}
            alt=""
            style={{
              height: "100%",
              width: "25%",
              display: "block",
              margin: "auto",
            }}
          />
          <h4>Available at 10.01.2021 - 15.01.2021</h4>
          <Button
            style={{ marginTop: "10px", width: "150px" }}
            block
            size="lg"
            type="submit"
          >
            Rent
          </Button>
        </div>
        <div className="car2">
          <img
            src={bmwI8}
            alt=""
            style={{
              height: "100%",
              width: "25%",
              display: "block",
              margin: "auto",
            }}
          />
          <h4>Available at 10.01.2021 - 15.01.2021</h4>

          <Button
            style={{
              marginTop: "10px",
              width: "150px",
            }}
            block
            size="lg"
            type="submit"
          >
            Rent
          </Button>
        </div>
        <div className="car1">
          <img
            src={audiA3}
            alt=""
            style={{
              height: "100%",
              width: "25%",
              display: "block",
              margin: "auto",
            }}
          />
          <h4>Available at 10.01.2021 - 15.01.2021</h4>
          <Button
            style={{ marginTop: "10px", width: "150px" }}
            block
            size="lg"
            type="submit"
          >
            Rent
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

{
  /*
  <Figure>
  <Figure.Image width={171} height={180} alt="171x180" src={img1} />
  <Figure.Caption>berr</Figure.Caption>
</Figure>;
  */
}
