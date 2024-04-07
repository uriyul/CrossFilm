import { useState } from "react";
import ImdbObj from "./ImdbObj";
import MainForm from "./MainForm";
import SideBySideActors from "./SideBySideActors";
import Films from "./Films";
import { Persons } from "./Person";

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [actor1, setActor1] = useState<Persons | null>(null);
  const [actor2, setActor2] = useState<Persons | null>(null);
  const [text, setText] = useState("");
  return (
    <div style={{ margin: "0 20px" }}>
      <SideBySideActors setAppActor1={setActor1} setAppActor2={setActor2} />
      {(actor1 == null || actor2 == null) && (
        <MainForm setText={setText} setDropdownVisible={setDropdownVisible} />
      )}
      {dropdownVisible && <ImdbObj text={text} />}
      {actor1 != null && actor2 != null && (
        <Films
          actor1Code={actor1.id}
          actor1Male={IsMale(actor1)}
          actor2Code={actor2.id}
          actor2Male={IsMale(actor2)}
        />
      )}

      {/* <DocTest actorCode="nm2933757" /> */}

      <div>------------</div>
    </div>
  );
}

function IsMale(actor: Persons) {
  // TODO: this function doesn't work properly.
  // If the person's primary role is not an actor (e.g. Quentin Tarantino), it will return false.
  return actor.s.startsWith("Actor");
}

export default App;
