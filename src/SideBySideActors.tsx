import "./App.css";
import Person from "./Person";
import { Persons } from "./Person";

let Actor1: Persons = {
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
let Actor2: Persons = {
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

function SideBySideActors() {
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

function SetActor1(actor: Persons) {
  Actor1 = actor;
}
function SetActor2(actor: Persons) {
  Actor2 = actor;
}

export default SideBySideActors;
export { SetActor1, SetActor2 };
