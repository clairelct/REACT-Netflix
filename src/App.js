import React from "react";
import "./App.css";
import data from "./assets/data.json";

// import Section from "./components/Section";
import Sections from "./components/Sections";

function App() {
  return (
    <>
      <div className="container">
        <img
          className="logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Logo Netflix"
        />
        <Sections data={data} />
      </div>
    </>
  );
}
export default App;
