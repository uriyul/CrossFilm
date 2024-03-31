import { FilmNode } from "./FilmsInterface";

interface Props {
  filmNode: FilmNode;
}

function Film({ filmNode }: Props) {
  return (
    <>
      <img
        width="100"
        height="148"
        src={filmNode.title.primaryImage?.url}
        alt={filmNode.title.primaryImage?.caption.plainText}
      />
      <div>{String(filmNode.title.titleText.text)}</div>
      <hr></hr>
    </>
  );
}

export default Film;
