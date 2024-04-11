import { useState } from "react";
import ImdbObj from "./ImdbObj";
import MainForm from "./MainForm";
import SideBySideActors from "./SideBySideActors";
import Films from "./Films";
import { Persons } from "./Person";

let SetActor1: (actor: Persons) => void;
let SetActor2: (actor: Persons) => void;

function App() {
  let Actor: Persons = {
    i: {
      height: 148,
      imageUrl:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg",
      width: 100,
    },
    id: "",
    l: "",
    s: "",
  };
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [actor1, setActor1] = useState<Persons>(Actor);
  const [actor2, setActor2] = useState<Persons>(Actor);
  const [text, setText] = useState("");
  SetActor1 = setActor1;
  SetActor2 = setActor2;

  return (
    <div style={{ margin: "0 20px" }}>
      <SideBySideActors Actor1={actor1} Actor2={actor2} />
      {(actor1.id == "" || actor2.id == "") && (
        <MainForm setText={setText} setDropdownVisible={setDropdownVisible} />
      )}
      {dropdownVisible && (
        <ImdbObj text={text} setActor1={setActor1} setActor2={setActor2} />
      )}
      <Films
        actor1Code={actor1 ? actor1.id : null}
        actor2Code={actor2 ? actor2.id : null}
      />
      <hr />
    </div>
  );
}

export default App;
