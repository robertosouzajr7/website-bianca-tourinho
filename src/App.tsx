import React from "react";
import "./App.css";
import { GlobalStyled } from "./styles/global";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyled />
    </div>
  );
}

export default App;
