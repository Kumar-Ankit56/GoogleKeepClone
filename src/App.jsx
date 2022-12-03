import { useState } from "react";
import "./App.css";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Notes from "./component/Notes/Notes";
import CreateArea from "./component/CreateArea/CreateArea";

function App() {

  return (
    <div>
      <Header />
      <Notes/>
      <Footer />
    </div>
  );
}

export default App;
