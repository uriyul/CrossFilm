interface Props {
  setText: (text: string) => void;
  setDropdownVisible: (visible: boolean) => void;
}

function MainForm({ setText, setDropdownVisible }: Props) {
  return (
    <div id="mainForm">
      <input
        id="actor"
        type="text"
        placeholder="Search Actor 1"
        autoComplete="off"
        style={{ marginBlock: "0 20px" }}
        onKeyUpCapture={(e) =>
          AutoComplete((e.target as HTMLInputElement).value, {
            setText,
            setDropdownVisible,
          })
        }
      />
    </div>
  );
}

function AutoComplete(e: string, { setText, setDropdownVisible }: Props) {
  if (e.length > 2) {
    setText(e);
    setDropdownVisible(true);
  } else {
    setDropdownVisible(false);
  }
}

export default MainForm;
