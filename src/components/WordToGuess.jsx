export function WordToGuess({ letters, usedLetters }) {
  const letterElements = letters.map((l, index) => {
    return (
      <span className="word-letter" key={index}>
        {usedLetters.includes(l) ? l.toUpperCase() : ""}
      </span>
    );
  });

  return (
    <>
      <div id="word-to-guess-div">{letterElements}</div>
    </>
  );
}
