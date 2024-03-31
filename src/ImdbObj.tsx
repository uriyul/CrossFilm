import { useEffect, useState } from "react";
import Person from "./Person";
import { Persons } from "./Person";

interface ImdbInterface {
  d: Persons[];
  q: string;
  v: number;
}

interface Props {
  text: string;
}

function ImdbObj({ text }: Props) {
  const [data, setData] = useState<ImdbInterface | null>(null);

  const url = "https://v3.sg.media-imdb.com/suggestion/x/" + text + ".json";

  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData);
  }, []);
  return (
    <div id="suggestions">
      {data?.d.map((item) => {
        if (item.id.startsWith("nm")) {
          return <Person i={item.i} id={item.id} l={item.l} s={item.s} />;
        }
        return null;
      })}
    </div>
  );
}

export default ImdbObj;
