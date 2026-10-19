import { useState } from "react";
import { ImageDisplay } from "./components/ImageDisplay";
import "./App.css";
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";
import EndPage from "./components/EndPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterJSON from './assets/Character.json'
import { CharacterManager } from "./components/classes/CharacterManager";
import { Character } from "./components/classes/Character";

function App() {
  const manager = new CharacterManager(CharacterJSON);
  manager.getAllCharacters().forEach((character) => {
    console.log(character.GetId() + ": " + character.GetName() + ", From Movie: " + character.GetMovieName())
  })

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
