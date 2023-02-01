import React, { useState } from "react";

export default function Message() {
  const [text, setText] = useState("")
  const onChange = (event) => {
    setText(event.target.value)
  }
  const onupper = () => {
    let upper = text.toUpperCase()
    setText(upper)
  }
  const onlower = () => {
    let lower = text.toLowerCase()
    setText(lower)
  }
  const onclear = () => {
    setText("")
  }
  const oncopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1")
    text.select()
    navigator.clipboard.writeText(text.value)
  }
  return (
    <div className="container my-3">
      <div className="mb-3">
        <h1>Text Area Editing Box</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="9" onChange={onChange}
          value={text}
        ></textarea>
      </div>
      <div className="mx-3">
        <button onClick={onupper} type="button" class="btn btn-primary">Upper</button>
        <button onClick={onlower} type="button" class="btn btn-secondary">Lower</button>
        <button onClick={onclear} type="button" class="btn btn-success">Clear</button>
        <button onClick={oncopy} type="button" class="btn btn-danger">Copy</button>
      </div>
    </div>
  );
}