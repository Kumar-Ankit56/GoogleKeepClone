import { useState } from "react";
import "./App.css";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Notes from "./component/Notes/Notes";
import CreateArea from "./component/CreateArea/CreateArea";
import notes from './notes';

function App() {

  return (
    <div>
      <Header />
      <CreateArea/>
      {notes.map(notesItem=>{
        return <Notes title={notesItem.title} content={notesItem.content}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
