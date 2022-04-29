import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import NodeList from "../NodeList";

function ModalDeleteAll({ updateList }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteAll = () => {
    let ln = NodeList.length;
    for (let i = -1; i < ln; i++) {
      NodeList.pop();
    }
    handleClose();
    localStorage.removeItem("array");
    window.location.reload();
  };

  return (
    <>
      <button className="createNewNode" onClick={handleShow}>
        Delete All
      </button>

      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header
          style={{
            justifyContent: "center",
          }}
          closeButton
        >
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="primary" size="lg" onClick={handleDeleteAll}>
            Yes
          </Button>
          <Button variant="secondary" size="lg" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteAll;
