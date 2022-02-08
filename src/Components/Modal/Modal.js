import React from "react";
import "./Modal.css";

function Modal(props) {
  console.log("geldim");
  return (
    <div className="modal-body">
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                props.setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Thank you</h1>
          </div>
          <div className="body">
            <p>{props.modalString}</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                props.setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
