interface Props {
  setText: (text: string) => void;
  setDropdownVisible: (visible: boolean) => void;
}

function MainForm({ setText, setDropdownVisible }: Props) {
  return (
    <div id="mainForm">
      <h1>Form</h1>
      <input
        id="actor1"
        type="text"
        placeholder="Actor1"
        style={{ marginBlock: "0 20px" }}
        onKeyUpCapture={(e) =>
          AutoComplete((e.target as HTMLInputElement).value, {
            setText,
            setDropdownVisible,
          })
        }
      />
      <br />
      <input
        id="actor2"
        type="text"
        placeholder="Actor2"
        style={{ marginBlock: "0 20px" }}
      />
      <br />
      <button
        type="button"
        className="btn btn-primary"
        style={{ marginBlock: "0 20px" }}
      >
        Submit
      </button>
    </div>
  );
}

function AutoComplete(e: string, { setText, setDropdownVisible }: Props) {
  console.log("$$$" + e);
  if (e.length > 2) {
    setText(e);
    setDropdownVisible(false);
    setDropdownVisible(true);
  } else {
    setDropdownVisible(false);
  }
}

export default MainForm;
