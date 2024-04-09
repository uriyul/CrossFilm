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

  // The following line is a hack to make the component re-render only when the text changes
  let deps = text.substring(text.length - 3, text.length - 1).split("");
  let actor1Id = document.getElementById("actor1")?.children[1].id;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData);
  }, deps);
  return (
    <div id="suggestions">
      {data?.d.map((item) => {
        if (
          item.id.startsWith("nm")
          // && item.id != actor1Id
        ) {
          return (
            <Person
              i={item.i}
              id={item.id}
              l={item.l}
              s={item.s}
              treatClick={true}
              key={item.id}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default ImdbObj;
