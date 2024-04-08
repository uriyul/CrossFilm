import { FilmNode } from "./FilmsInterface";

interface Props {
  filmNode: FilmNode;
}

function Film({ filmNode }: Props) {
  return (
    <div>
      <img
        width="100"
        height="148"
        src={filmNode.title.primaryImage?.url}
        alt={filmNode.title.primaryImage?.caption.plainText}
      />
      <div>
        {String(filmNode.title.titleText.text)} (
        {String(filmNode.title.releaseYear?.year)}
        )
        <br />
        {String(filmNode.title.titleType.text)}
      </div>
      <hr></hr>
    </div>
  );
}

export default Film;
