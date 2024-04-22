import { useEffect, useState } from "react";
import Person from "./Person";
import { Persons } from "./Person";
import { Img } from "./Person";

interface ImdbInterface {
  d: Persons[];
  q: string;
  v: number;
}

interface Props {
  text: string;
  setActor1: (actor: Persons) => void;
  setActor2: (actor: Persons) => void;
  setDropdownVisible: (visible: boolean) => void;
}

function ImdbObj({ text, setActor1, setActor2, setDropdownVisible }: Props) {
  const [data, setData] = useState<ImdbInterface | null>(null);

  const url = "https://v3.sg.media-imdb.com/suggestion/x/" + text + ".json";

  let actor1Id = document.getElementById("actor1")?.children[1].id;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData);
  }, [text]);
  return (
    <div id="suggestions">
      {data?.d.map((item) => {
        if (item.id.startsWith("nm") && item.id != actor1Id) {
          return (
            <Person
              i={GetImage(item.i)}
              id={item.id}
              l={item.l}
              s={item.s}
              treatClick={true}
              key={item.id}
              setActor1={setActor1}
              setActor2={setActor2}
              setDropdownVisible={setDropdownVisible}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

function GetImage(img: Img) {
  if (img != undefined && img != null) {
    return img;
  } else {
    return {
      height: 148,
      imageUrl:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg",
      width: 100,
    };
  }
}

export default ImdbObj;
