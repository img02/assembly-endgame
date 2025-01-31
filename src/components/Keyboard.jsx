export function Keyboard({ alphabet, guessLetter }) {
  const keyboardElements = alphabet.split("").map((a) => {
    return (
      <button
        className="alphabet-button"
        key={a}
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
