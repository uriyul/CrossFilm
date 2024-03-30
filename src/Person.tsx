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

function Person({ i, id, l, s }: Persons) {
  return (
    <div key={id} onClick={() => console.log("Person clicked: " + l)}>
      <img width="100" height="148" src={i?.imageUrl} alt={l} />
      <p>{l}</p>
      <p>{s}</p>
      <hr></hr>
    </div>
  );
}

export default Person;
export type { Persons };
