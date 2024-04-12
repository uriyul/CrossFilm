import { useState } from "react";
import ImdbObj from "./ImdbObj";
import MainForm from "./MainForm";
import SideBySideActors from "./SideBySideActors";
import Films from "./Films";
import { Persons } from "./Person";

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

  return (
    <div style={{ margin: "0 20px" }}>
      <img width="500" height="148" src={"/public/CrossFilm.png"} />
      <SideBySideActors Actor1={actor1} Actor2={actor2} />
      {(actor1.id == "" || actor2.id == "") && (
        <MainForm setText={setText} setDropdownVisible={setDropdownVisible} />
      )}
      {(actor1.id != "" || actor2.id != "") && !dropdownVisible && (
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => location.reload()}
          >
            Clear
          </button>
        </div>
      )}
      <br />
      {dropdownVisible && (
        <ImdbObj
          text={text}
          setActor1={setActor1}
          setActor2={setActor2}
          setDropdownVisible={setDropdownVisible}
        />
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
