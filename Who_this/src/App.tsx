import { useState } from "react";
import { ImageDisplay } from "./components/ImageDisplay";
import "./App.css";
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";
import EndPage from "./components/EndPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" Component={StartPage}/>
      <Route path="/start" Component={StartPage}/>
      <Route path="/game" Component={GamePage} />
      <Route path="/end" Component={EndPage}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
