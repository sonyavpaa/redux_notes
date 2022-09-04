import React from "react";

import { createRoot } from "react-dom/client";

import store from "./store";
import { Provider } from "react-redux";

import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <div className="notesContainer">
        <div className="left">
          <AddNote />
        </div>
        <div className="right">
          <NoteList />
        </div>
      </div>
    </Provider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
