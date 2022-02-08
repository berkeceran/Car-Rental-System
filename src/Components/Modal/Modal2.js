import React from "react";
import "./Modal2.css";

function Modal2({ setOpenModal }) {
  return (
    <div className="modal-body">
        <div className="modalBackground" >
        <div className="modalContainer">
            <div className="titleCloseBtn">
            <button
                onClick={() => {
                setOpenModal(false);
                }}
            >
                X
            </button>
            </div>
            <div className="title">
            <h1>Please select information</h1>
            </div>
            <div className="body">
            <p>Branch that car will be returned</p>
            <select id="select-state" className= "selection" placeholder="Pick a state...">
                <option value="">Select a state...</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
            </select>
            </div>
            <div className="footer">
            <button
                onClick={() => {
                setOpenModal(false);
                }}
                id="closeButton"
            >
                Close
            </button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Modal2;