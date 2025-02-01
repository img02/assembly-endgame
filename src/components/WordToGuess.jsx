import { clsx } from "clsx";
export function WordToGuess({ letters, usedLetters, isGameLost }) {
  const letterElements = letters.map((l, index) => {
    const correctLetter = usedLetters.includes(l);
    const classes = clsx(
      isGameLost && !correctLetter && "missed-letter",
      "word-letter"
    );
    return (
      <span className={classes} key={index}>
        {correctLetter || isGameLost ? l.toUpperCase() : ""}
      </span>
    );
  });

  return (
    <>
      <div id="word-to-guess-div">{letterElements}</div>
    </>
  );
}
