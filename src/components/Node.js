import "../App.css";
import NodeList from "../NodeList";
import ChildList from "../ChildList";

function Node({ node, click, deleteNode }) {
  const log = () => {
    click(node.name);
  };

  const handleDelete = () => {
    if (ChildList.length < 1) {
      const a = NodeList.filter((n) => n.name === node.name);
      NodeList.splice(NodeList.indexOf(a[0]), 1);
      deleteNode();
      localStorage.setItem("array", JSON.stringify(NodeList));
    } else {
      const a = ChildList[ChildList.length - 1].children.filter(
        (n) => n.name === node.name
      );
      ChildList[ChildList.length - 1].children.splice(
        ChildList[ChildList.length - 1].children.indexOf(a[0]),1
      );
      deleteNode();
      localStorage.setItem("array", JSON.stringify(NodeList));
    }
  };

  return (
    <div className="card-node">
      <div className="contrOfCard" onClick={log}>
        <div>
          <h3>{node.name}</h3>
        </div>
      </div>
      <button className="btn-del" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Node;
