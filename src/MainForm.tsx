import { Persons } from "./Person";
import { SetActor1 as SetActor1Ex } from "./SideBySideActors";
import { SetActor2 as SetActor2Ex } from "./SideBySideActors";

interface Props {
  setText: (text: string) => void;
  setDropdownVisible: (visible: boolean) => void;
}

let currentActorNum = 1;

function MainForm({ setText, setDropdownVisible }: Props) {
  return (
    <div id="mainForm">
      <input
        id="actor"
        type="text"
        placeholder="Search Actor 1"
        autoComplete="off"
        style={{ marginBlock: "0 20px" }}
        onKeyUpCapture={(e) =>
          AutoComplete((e.target as HTMLInputElement).value, {
            setText,
            setDropdownVisible,
          })
        }
      />
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
      currentActorNum = 2;
      (element as HTMLInputElement).value = "";
      (element as HTMLInputElement).placeholder = "Search Actor 2";
      SetActor1Ex(actor);
      // Show actors
    } else if (currentActorNum == 2) {
      // set right to actor 2
      SetActor2Ex(actor);
      // clear field actor
      (element as HTMLInputElement).value = "";
      (element as HTMLInputElement).placeholder = "";
      (element as HTMLInputElement).disabled = true;
    }
    // clear suggestions
    const suggestions = document.getElementById("suggestions");
    (suggestions as HTMLElement).innerHTML = "";
  }
}

export default MainForm;
export { SetActor };
