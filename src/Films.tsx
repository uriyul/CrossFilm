// Add an empty index.ts file in the same directory as FilmsInterface.ts
import { useEffect, useState } from "react";
import { FilmNode, FilmsRoot } from "./FilmsInterface";
import Film from "./Film";

interface Props {
  actor1Code: string;
  actor2Code: string;
}

function Films({ actor1Code, actor2Code }: Props) {
  const [data1, setData1] = useState<FilmsRoot | null>(null);
  const [data2, setData2] = useState<FilmsRoot | null>(null);

  let actor1Map = new Map<string, FilmNode>();
  let actor2Map = new Map<string, FilmNode>();
  GetFilmsForActor(actor1Code, setData1, actor1Map, data1);
  GetFilmsForActor(actor2Code, setData2, actor2Map, data2);

  if (data1 == null || data2 == null) return <div></div>;

  let intersectionMap = GetFilmsIntersection(actor1Map, actor2Map);

  if (intersectionMap.size == 0)
    return <div>Actors don't have any common film</div>;

  return (
    <div>
      <h3>Common Films:</h3>
      {Array.from(intersectionMap.values()).map((value) => (
        <Film filmNode={value} />
      ))}
    </div>
  );
}

function GetFilmsForActor(
  actorCode: string,
  setData: (value: FilmsRoot | null) => void,
  hashMap: Map<string, FilmNode>,
  data: FilmsRoot | null
) {
  const url =
    "https://caching.graphql.imdb.com/?operationName=NameMainFilmographyPaginatedCredits&variables=%7B%22after%22%3A%22bm0wMDAwMTU4L3R0MTM3MTExMS9hY3Rvcg%3D%3D%22%2C%22id%22%3A%22" +
    actorCode +
    "%22%2C%22includeUserRating%22%3Afalse%2C%22locale%22%3A%22en-US%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22sha256Hash%22%3A%224faf04583fbf1fbc7a025e5dffc7abc3486e9a04571898a27a5a1ef59c2965f3%22%2C%22version%22%3A1%7D%7D";

  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (data == null) return;

  data?.data.name.actor_credits.edges.map((item) => {
    hashMap.set(item.node.title.id, item.node);
  });
}

function GetFilmsIntersection(
  actor1Map: Map<string, FilmNode>,
  actor2Map: Map<string, FilmNode>
): Map<string, FilmNode> {
  let intersectionMap = new Map<string, FilmNode>();

  actor1Map.forEach((value, key) => {
    if (actor2Map.has(key)) {
      intersectionMap.set(key, value);
    }
  });

  return intersectionMap;
}

export default Films;
