import { useState } from "react";
import ImdbObj from "./ImdbObj";
import MainForm from "./MainForm";

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [text, setText] = useState("");
  return (
    <div style={{ margin: "0 20px" }}>
      <div>------------</div>
      <MainForm setText={setText} setDropdownVisible={setDropdownVisible} />
      <div>------------</div>
      {dropdownVisible && <ImdbObj text={text} />}
      <div>------------</div>
    </div>
  );
}

export default App;
