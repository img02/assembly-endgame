import { useState } from "react";
import "./App.css";
import { Lives } from "./components/Lives";
import { WordToGuess } from "./components/WordToGuess";
import { Keyboard } from "./components/Keyboard";
import { Status } from "./components/Status";
import { languages } from "./assets/languages";
import { words } from "./assets/words";

function App() {
  // state values
  const [word, setWord] = useState(() => getRandomWord());
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

  function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    console.log(words[index]);
    return words[index];
  }

  function guessLetter(letter) {
    //check if letter already guessed
    if (usedLetters.includes(letter)) return;

    //finally, add to usedLetters
    setUsedLetters((prev) => [...prev, letter]);
  }

  function ResetGame() {
    setUsedLetters([]);
    setWord(getRandomWord());
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
        <WordToGuess
          letters={word.split("")}
          usedLetters={usedLetters}
          isGameLost={isGameLost}
        />

        <section className="sr-only" aria-live="polite" role="status">
          <p>
            Current word:{" "}
            {word
              .split("")
              .map((letter) =>
                usedLetters.includes(letter) ? letter + "." : "blank."
              )
              .join(" ")}
          </p>
        </section>

        <Keyboard
          alphabet={alphabet}
          guessLetter={guessLetter}
          usedLetters={usedLetters}
          word={word}
          isGameOver={isGameOver}
        />
        {isGameOver ? (
          <button className="new-game" onClick={ResetGame}>
            New Game
          </button>
        ) : null}
      </main>
    </>
  );
}

export default App;
