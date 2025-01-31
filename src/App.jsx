import { useState } from "react";
import "./App.css";
import { Lives } from "./components/Lives";
import { WordToGuess } from "./components/WordToGuess";
import { GuessInput } from "./components/GuessInput";
import { Status } from "./components/Status";

function App() {
  const gameStatus = "win";
  return (
    <>
      <main>
        <header>
          <h1>Assembly: Endgame</h1>
          <p>
            Guess the word in under 8 attempts to keep the programming world
            safe from Assembly!
          </p>
        </header>

        {gameStatus !== "playing" ? <Status gameStatus={gameStatus} /> : null}
        <Lives />
        <WordToGuess />
        <GuessInput />
      </main>
    </>
  );
}

export default App;
