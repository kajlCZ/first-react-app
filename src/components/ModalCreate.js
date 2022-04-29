import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import FormCreate from "./FormCreate";

function ModalCreate({ updateList }) {
  const [show, setShow] = useState(false);
  const childFunc = React.useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCrate = () => {
    setShow(false);
    childFunc.current();
    updateList();
  };

  return (
    <>
      <button className="createNewNode" onClick={handleShow}>
        Create Node
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCreate childFunc={childFunc} handleCrate={handleCrate} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCrate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreate;
