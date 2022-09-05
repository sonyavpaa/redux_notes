import React from "react";
import Note from "./Note";

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

export default NoteList;
