import { useState } from "react";
import { Persons } from "./Person";
import { SetActor1 as SetActor1Ex } from "./SideBySideActors";
import { SetActor2 as SetActor2Ex } from "./SideBySideActors";

interface Props {
  setText: (text: string) => void;
  setDropdownVisible: (visible: boolean) => void;
}

let SetActor1: (actor: Persons) => void;
let SetActor2: (actor: Persons) => void;
let currentActorNum = 1;

function MainForm({ setText, setDropdownVisible }: Props) {
  const [Actor1, setActor1] = useState<Persons | null>(null);
  const [Actor2, setActor2] = useState<Persons | null>(null);
  SetActor1 = setActor1;
  SetActor2 = setActor2;
  return (
    <div id="mainForm">
      <h1>Form</h1>
      <input
        id="actor"
        type="text"
        placeholder="Search Actor 1"
        style={{ marginBlock: "0 20px" }}
        onKeyUpCapture={(e) =>
          AutoComplete((e.target as HTMLInputElement).value, {
            setText,
            setDropdownVisible,
          })
        }
      />
      <br />
      <button
        id="submit"
        type="button"
        className="btn btn-primary"
        disabled={true}
        style={{ marginBlock: "0 20px" }}
      >
        Submit
      </button>
    </div>
  );
}

function AutoComplete(e: string, { setText, setDropdownVisible }: Props) {
  console.log("$$$" + e);
  if (e.length > 2) {
    setText(e);
    setDropdownVisible(true);
  } else {
    setDropdownVisible(false);
  }
}

function SetActor(actor: Persons) {
  const element = document.getElementById("actor");
  if (element) {
    if (currentActorNum == 1) {
      SetActor1(actor);
      currentActorNum = 2;
      (element as HTMLInputElement).value = "";
      (element as HTMLInputElement).placeholder = "Search Actor 2";
      // Set the left to actor 1
      SetActor1Ex(actor);
      // Show actors
    } else if (currentActorNum == 2) {
      SetActor2(actor);
      // set right to actor 2
      SetActor2Ex(actor);
      // clear field actor
      (element as HTMLInputElement).value = "";
      (element as HTMLInputElement).placeholder = "";
      (element as HTMLInputElement).disabled = true;

      // enable submit button
      const submit = document.getElementById("submit");
      (submit as HTMLButtonElement).disabled = false;
    }
    // clear suggestions
    const suggestions = document.getElementById("suggestions");
    (suggestions as HTMLElement).innerHTML = "";
  }
}

export default MainForm;
export { SetActor };
