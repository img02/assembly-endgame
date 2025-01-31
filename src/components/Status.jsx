import { clsx } from "clsx";
export function Status({ isGameWon, isGameLost, isGameOver }) {
  const classes = clsx(isGameWon && "won", isGameLost && "lost", "game-status");

  const title = isGameWon ? "You win!" : isGameLost ? "Game over!" : "";

  const text = isGameWon
    ? "Well Done! 🎉"
    : isGameLost
    ? "You Lost Better start learning Assembly 😭"
    : "";

  return (
    <section className={classes}>
      {isGameOver ? (
        <>
          <h2>{title}</h2>
          <p>{text}</p>
        </>
      ) : null}
    </section>
  );
}
