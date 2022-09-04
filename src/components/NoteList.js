import React from "react";
import Note from "./Note";
import { connect } from "react-redux";

import { useSelector, useDispatch } from "react-redux";

import { notesList, deleteTodo } from "../store/todoSlice";

function NoteList() {
  const notes = useSelector(notesList);
  const dispatch = useDispatch();

  return (
    <div className="noteList">
      {notes.map((note, i) => (
        <Note
          key={i}
          text={note.text}
          title={note.title}
          click={() => dispatch(deleteTodo(i))}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notes: state,
  };
}

export default connect(mapStateToProps)(NoteList);
