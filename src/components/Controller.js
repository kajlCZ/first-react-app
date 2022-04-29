import ModalCreate from "./ModalCreate";
import ModalDeleteAll from "./ModalDeleteAll";
import NodeList from "../NodeList";
import React, { useState } from "react";
import ModalImportFile from "./ModalImportFile";
import Menu from "./Menu";

function Controller({ updateList }) {
  return (
    <div className="contr">
      <div className="menu">
        <Menu updateList={updateList}></Menu>
      </div>
      <div className="con-buttons">
        <ModalCreate updateList={updateList} />
        <ModalDeleteAll updateList={updateList} />
        <a
          className="save"
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(NodeList)
          )}`}
          download="app.json"
        >
          Save
        </a>

        <ModalImportFile updateList={updateList}></ModalImportFile>
      </div>
    </div>
  );
}

export default Controller;
