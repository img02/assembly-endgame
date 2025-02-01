import { useState } from "react";
import "./App.css";
import { Lives } from "./components/Lives";
import { WordToGuess } from "./components/WordToGuess";
import { Keyboard } from "./components/Keyboard";
import { Status } from "./components/Status";
import { languages } from "./assets/languages";

function App() {
  // state values
  const [word, setWord] = useState("react");
  const [usedLetters, setUsedLetters] = useState([]);

  // derived values
  const wrongGuessCount = usedLetters.reduce(
    (wrongCount, currLetter) =>
      word.includes(currLetter) ? wrongCount : wrongCount + 1,
    0
  );

  // static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const gameStatus = "win";
  const isGameWon = word
    .split("")
    .every((letter) => usedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameLost || isGameWon;

  function guessLetter(letter) {
    //check if letter already guessed
    if (usedLetters.includes(letter)) return;

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

        <Status
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          isGameOver={isGameOver}
          languages={languages}
          wrongGuessCount={wrongGuessCount}
          word={word}
          usedLetters={usedLetters}
        />
        <Lives wrongGuessCount={wrongGuessCount} />
        <WordToGuess letters={word.split("")} usedLetters={usedLetters} />
        <Keyboard
          alphabet={alphabet}
          guessLetter={guessLetter}
          usedLetters={usedLetters}
          word={word}
        />
        {isGameOver ? <button className="new-game">New Game</button> : null}
      </main>
    </>
  );
}

export default App;
