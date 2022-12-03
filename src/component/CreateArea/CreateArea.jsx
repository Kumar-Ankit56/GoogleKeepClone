import React, { useEffect, useState } from "react";
import "./CreateArea.css";

function CreateArea() {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNotes((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={notes.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={notes.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
