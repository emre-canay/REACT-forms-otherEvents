import { useState } from "react";

const KeyboardClipboard = () => {
  const [inpuData, SetinputData] = useState("");

  return (
    <div className="container text-center">
      <h2 className="display-5">Keyboard-Clipboard Event</h2>
      <input type="text" className="form-control" onChange={handleChange} />
      <p className="text-start mt-4">{inpuData}</p>
      <textarea
        className="form-control"
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;

const hanleAreaPaste = () => {
  console.log(e);
};
return;
