import { useState } from "react";
import ChildList from "../ChildList";

function Menu({ updateList }) {
  const [childlistchanched, setchildlistchanched] = useState(false);

  const listmap = ChildList.map((n) => {
    return (
      <div key={n.key + 1}>
        <button
          key={n.key + 1}
          className="menu-button"
          onClick={() => {
            ChildList.splice(ChildList.indexOf(n) + 1, ChildList.length);
            childlistchanched
              ? setchildlistchanched(false)
              : setchildlistchanched(true);
            updateList();
          }}
        >
          {n.name}
        </button>
        <span key={n.key + 2} className="slash">
          &#47;
        </span>
      </div>
    );
  });

  return (
    <>
      <div>
        <button
          className="menu-button"
          key={0}
          onClick={() => {
            ChildList.splice(0, ChildList.length);
            childlistchanched
              ? setchildlistchanched(false)
              : setchildlistchanched(true);
            updateList();
          }}
        >
          Home
        </button>
        <span className="slash">&#47;</span>
      </div>
      {listmap}
    </>
  );
}

export default Menu;
