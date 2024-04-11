//import { useState } from "react";
import "./App.css";
import Person from "./Person";
import { Persons } from "./Person";

interface Props {
  //setAppActor1: (actor: Persons) => void;
  //setAppActor2: (actor: Persons) => void;
  Actor1: Persons;
  Actor2: Persons;
}

// let Actor: Persons = {
//   i: {
//     height: 148,
//     imageUrl:
//       "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg",
//     width: 100,
//   },
//   id: "",
//   l: "",
//   s: "",
// };

//let SetActor1: (actor: Persons) => void;
//let SetActor2: (actor: Persons) => void;

function SideBySideActors({ Actor1, Actor2 }: Props) {
  //const [Actor1, setActor1] = useState(Actor);
  //const [Actor2, setActor2] = useState(Actor);
  //SetActor1 = setActor1;
  //SetActor2 = setActor2;

  console.log("In SbS, Actor 1: " + Actor1.l + " Actor 2: " + Actor2.l);

  //if (Actor1.id != "") setAppActor1(Actor1);

  //if (Actor2.id != "") setAppActor2(Actor2);

  console.log("Rendering Actor 1: " + Actor1.l + " Actor 2: " + Actor2.l);

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
//export { SetActor1, SetActor2 };
