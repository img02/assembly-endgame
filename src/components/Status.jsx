import { clsx } from "clsx";
import { getFarewellText } from "../assets/utils";

export function Status({
  isGameWon,
  isGameLost,
  isGameOver,
  languages,
  wrongGuessCount,
  word,
  usedLetters,
}) {
  const lastGuessedLetter = usedLetters[usedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !word.includes(lastGuessedLetter);

  const classes = clsx(
    isGameWon && "won",
    isGameLost && "lost",
    wrongGuessCount > 0 && !isGameOver && isLastGuessIncorrect && "farewell",
    "game-status"
  );

  const title = isGameWon ? "You win!" : isGameLost ? "Game over!" : "";

  const text = isGameWon
    ? "Well Done! 🎉"
    : isGameLost
    ? "You Lose! Better start learning Assembly 😭"
    : "";

  function GameOver() {
    return (
      <>
        <h2>{title}</h2>
        <p>{text}</p>
      </>
    );
  }

  function FarewellLanguage() {
    if (wrongGuessCount === 0 || !isLastGuessIncorrect) return <></>;

    return (
      <>
        <p className="farewell-text">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      </>
    );
  }

  return (
    <section aria-live="polite" role="status" className={classes}>
      {isGameOver ? GameOver() : FarewellLanguage()}
    </section>
  );
}
