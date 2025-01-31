import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Lives } from "./components/Lives";
import { WordToGuess } from "./components/WordToGuess";
import { GuessInput } from "./components/GuessInput";
import { Status } from "./components/Status";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Header />
        <Status />
        <Lives />
        <WordToGuess />
        <GuessInput />
      </main>
    </>
  );
}

export default App;
