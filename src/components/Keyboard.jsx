import { clsx } from "clsx";

export function Keyboard({
  alphabet,
  guessLetter,
  usedLetters,
  word,
  isGameOver,
}) {
  const keyboardElements = alphabet.split("").map((a) => {
    const letterUsed = usedLetters.includes(a);
    const existsInWord = word.includes(a);
    const wrong = letterUsed && !existsInWord;
    const correct = letterUsed && existsInWord;

    const classes = clsx(
      wrong && "wrong",
      correct && "correct",
      "alphabet-button"
    );

    return (
      <button
        className={classes}
        key={a}
        disabled={isGameOver}
        aria-disabled={usedLetters.includes(a)}
        aria-label={`Letter ${a}`}
        onClick={() => guessLetter(a)}
      >
        {a.toUpperCase()}
      </button>
    );
  });

  return (
    <>
      <section id="guess-input-div">{keyboardElements}</section>
    </>
  );
}
