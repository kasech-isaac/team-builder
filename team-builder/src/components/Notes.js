import React from "react";


const Notes = props => {
    return (
      <div className="note-list">
        {props.notes.map((note, id) => (
          <div className="note" key={id}>
            <h2>{note.name}</h2>
            <p>{note.email}</p>
            <p>{note.role}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Notes;
  

