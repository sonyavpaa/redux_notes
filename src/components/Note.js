import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h4>{props.title}</h4>
      <p>{props.text}</p>

      <button onClick={props.click}>delete</button>
    </div>
  );
}

export default Note;
