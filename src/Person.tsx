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

function Person({ i: image, id, l: name, s: description }: Persons) {
  return (
    <div
      key={id}
      onClick={() => console.log("Person clicked: " + name)}
      className="div"
    >
      <img width="100" height="148" src={image?.imageUrl} alt={name} />
      <p>{name}</p>
      <p>{description}</p>
      <hr></hr>
    </div>
  );
}

export default Person;
export type { Persons };
