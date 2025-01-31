import { useState } from "react";
import "./App.css";
import { Lives } from "./components/Lives";
import { WordToGuess } from "./components/WordToGuess";
import { Keyboard } from "./components/Keyboard";
import { Status } from "./components/Status";

function App() {
  const [word, setWord] = useState("react");
  const [usedLetters, setUsedLetters] = useState([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const gameStatus = "win";

  function guessLetter(letter) {
    console.log(letter);
    //check if letter already guessed
    if (usedLetters.some((usedLetter) => usedLetter === letter)) return;

    //if not, check if exists in word
    if (word.some((l) => l === usedLetters)) {
      //either convert word to an object with a 'found' bool
      // or creat a new state called foundLetters to compare with.
    }

    //if not, lose one life

    //if yes, show found letter in wordToGuess

    //on rerender, should update / check game state

    //finally, add to usedLetters
    setUsedLetters((prev) => [...prev, letter]);
  }

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
        <WordToGuess letters={word.split("")} />
        <Keyboard
          alphabet={alphabet}
          guessLetter={guessLetter}
          usedLetters={usedLetters}
        />
        <button className="new-game">New Game</button>
      </main>
    </>
  );
}

export default App;
