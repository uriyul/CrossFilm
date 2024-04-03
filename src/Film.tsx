import { FilmNode } from "./FilmsInterface";

interface Props {
  filmNode: FilmNode;
}

function Film({ filmNode }: Props) {
  return (
    <div key={filmNode.title.id}>
      <img
        width="100"
        height="148"
        src={filmNode.title.primaryImage?.url}
        alt={filmNode.title.primaryImage?.caption.plainText}
      />
      <div key={filmNode.title.id + "_"}>
        {String(filmNode.title.titleText.text)} (
        {String(filmNode.title.releaseYear?.year)})
      </div>
      <hr></hr>
    </div>
  );
}

export default Film;
