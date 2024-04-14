import "./App.css";

interface Persons {
  i: Img;
  id: string;
  l: string;
  s: string;
  rank?: number;
  v?: V[];
  vt?: number;
  q?: string;
  qid?: string;
  y?: number;
  yr?: string;
  treatClick?: boolean;
  setActor1?: (actor: Persons) => void;
  setActor2?: (actor: Persons) => void;
  setDropdownVisible?: (visible: boolean) => void;
}

interface V {
  i: Img;
  id: string;
  l: string;
  s: string;
}
interface Img {
  height: number;
  imageUrl: string;
  width: number;
}

function Person({
  i: image,
  id,
  l: name,
  s: description,
  treatClick = false,
  setActor1,
  setActor2,
  setDropdownVisible,
}: Persons) {
  return (
    <div
      key={id}
      id={id}
      onClick={() => {
        console.log("Person clicked: " + name);
        if (treatClick)
          SetActor({
            i: image,
            id,
            s: description,
            l: name,
            setActor1: setActor1,
            setActor2: setActor2,
            setDropdownVisible: setDropdownVisible,
          });
      }}
      className="div"
    >
      <img width="100" height="148" src={image?.imageUrl} alt={name} />
      <p>{name}</p>
      <p>{description}</p>
      <hr></hr>
    </div>
  );
}

let currentActorNum = 1;

function SetActor(actor: Persons) {
  const element = document.getElementById("actor");
  if (element) {
    if (currentActorNum == 1) {
      currentActorNum = 2;
      (element as HTMLInputElement).value = "";
      (element as HTMLInputElement).placeholder = "Search Actor 2";
      if (actor.setActor1) {
        actor.setActor1(actor);
        console.log("Actor 1 set: " + actor.l);
        if (actor.setDropdownVisible) actor.setDropdownVisible(false);
      }
      // Show actors
    } else if (currentActorNum == 2) {
      // set right to actor 2
      if (actor.setActor2) {
        actor.setActor2(actor);
        if (actor.setDropdownVisible) actor.setDropdownVisible(false);
        console.log("Actor 2 set: " + actor.l);
      }
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
export default Person;
export type { Persons };
export type { Img };
