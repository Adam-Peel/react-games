import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GameBox from "./components/Game";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <GameBox />
      </div>
    </>
  );
}

export default App;
