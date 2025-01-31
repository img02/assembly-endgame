export function WordToGuess({ letters, usedLetters }) {
  const letterElements = letters.map((letter, index) => (
    <span className="word-letter" key={index}>
      {letter.toUpperCase()}
    </span>
  ));

  return (
    <>
      <div id="word-to-guess-div">{letterElements}</div>
    </>
  );
}
