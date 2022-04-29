import "./App.css";
import Controller from "./components/Controller";
import { useState } from "react";
import ListOfNodes from "./components/ListOfNodes";
import NodeList from "./NodeList"


const ar = JSON.parse(localStorage.getItem("array"));
if (ar != undefined) {
  ar.map((n) => {
    NodeList.push(n);
    return (console.log("data loaded from localStorage"))
  });
}

function App() {
  const [update, setUpdate] = useState(false);
  const updateList = () => {
    update ? setUpdate(false) : setUpdate(true);
  };

  return (
    <div>
      <Controller updateList={updateList} />
      <ListOfNodes updateList={updateList}></ListOfNodes>
    </div>
  );
}

export default App;
