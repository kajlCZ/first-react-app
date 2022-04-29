import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NodeList from "../NodeList";

export default function ModalImportFile({ updateList }) {
  const [show, setShow] = useState(false);
  var file = null;

  const handleChange = (e) => {
    file = e.target.files[0];
    console.log(e.target.files[0]);
  };

  const handleImport = () => {
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = (e) => {
      let f = JSON.parse(e.target.result);
      f.map((n) => {
        NodeList.push(n);
      });
      updateList();
    };
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="createNewNode" onClick={handleShow}>
        Import
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" onChange={handleChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleImport}>
            Import
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
