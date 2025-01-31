import { languages } from "../assets/languages";

export function Lives({ wrongGuessCount }) {
  const languageElements = languages.map((l, index) => {
    const style = { backgroundColor: l.backgroundColor, color: l.color };
    return (
      <span
        style={style}
        key={l.name}
        className={index < wrongGuessCount ? "lost" : ""}
      >
        {l.name}
      </span>
    );
  });

  return (
    <>
      <div id="lives-div">{languageElements}</div>
    </>
  );
}
