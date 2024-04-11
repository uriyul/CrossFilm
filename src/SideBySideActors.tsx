import "./App.css";
import Person from "./Person";
import { Persons } from "./Person";

interface Props {
  Actor1: Persons;
  Actor2: Persons;
}

function SideBySideActors({ Actor1, Actor2 }: Props) {
  return (
    <div id="sideBySideActors" className="splitscreen">
      <div id="actor1" className="left">
        <h2>Actor 1</h2>
        <Person i={Actor1!.i} id={Actor1!.id} l={Actor1!.l} s={Actor1!.s} />
      </div>
      <div id="actor2" className="right">
        <h2>Actor 2</h2>
        <Person i={Actor2!.i} id={Actor2!.id} l={Actor2!.l} s={Actor2!.s} />
      </div>
    </div>
  );
}

export default SideBySideActors;
