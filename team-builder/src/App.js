import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from "../src/components/Forms"
import Notes from "../src/components/Notes"




function App() {
  const [notes, setNotes] = useState([
    {
      name: "Kasech Isaac",
      email: "Kasech@gmail.com",
        role:"Frontend Wed Dev"
    }
  ]);

  return (
    <div className="App">
      <h1>Team Members List</h1>
      <Forms notes={notes} setNotes={setNotes} />
      <Notes notes={notes} />
    </div>
  );
}

export default App;

      