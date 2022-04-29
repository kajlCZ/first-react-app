import React from "react";
import Node from "./Node";
import NodeList from "../NodeList";
import { useState } from "react";
import "../App.css";
import ChildList from "../ChildList";

function ListOfNodes({ updateList }) {
  const [clickedCard, setClickedCard] = useState(false);
  const [nodeDeleted, setNodeDeleted] = useState(false);

  const deleteNode = () => {
    nodeDeleted ? setNodeDeleted(false) : setNodeDeleted(true);
  };

  const cardClick = (name) => {
    ChildList.length < 1
      ? ChildList.push(NodeList.find((e) => e.name === name))
      : ChildList.push(
          ChildList[ChildList.length - 1].children.find((e) => e.name === name)
        );
    updateList();
    clickedCard ? setClickedCard(false) : setClickedCard(true);
  };

  const listmap =
    ChildList.length < 1
      ? NodeList.map((node) => {
          return (
            <Node
              node={node}
              key={node.key}
              click={cardClick}
              deleteNode={deleteNode}
            ></Node>
          );
        })
      : ChildList[ChildList.length - 1].children.map((node) => {
          return (
            <Node
              node={node}
              key={node.key}
              click={cardClick}
              deleteNode={deleteNode}
            ></Node>
          );
        });

  return <div className="nodeList">{listmap}</div>;
}

export default ListOfNodes;
