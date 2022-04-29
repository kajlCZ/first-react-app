import Form from "react-bootstrap/Form";
import React, { useState, useEffect, useRef } from "react";
import NodeList from "../NodeList";
import ChildList from "../ChildList";

function FormCreate({ childFunc, handleCrate }) {
  const [name, setName] = useState("");
  const focusDiv = useRef();

  useEffect(() => {
    childFunc.current = addNode;
  });

  function addNode() {
    if (name.length === 0) {
      return;
    }
    let oneNode = {
      name: name,
      children: [],
      key: Math.floor(Math.random() * 1000000),
    };
    ChildList.length < 1
      ? NodeList.push(oneNode)
      : ChildList[ChildList.length - 1].children.push(oneNode);
    localStorage.setItem("array", JSON.stringify(NodeList));
    //console.log(NodeList);
  }

  useEffect(() => {
    if (focusDiv.current) focusDiv.current.focus();
  }, [focusDiv]);

  const handleEnter = (e) => {
    e.preventDefault();
    handleCrate();
  };

  return (
    <Form onSubmit={handleEnter}>
      <Form.Group className="mb-3" controlId="formbasicname">
        <Form.Label>Name of new page</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          onChange={(event) => setName(event.target.value)}
          ref={focusDiv}
        />
      </Form.Group>
    </Form>
  );
}

export default FormCreate;
