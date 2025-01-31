import { languages } from "../assets/languages";

export function Lives() {
  const languageElements = languages.map((l) => {
    const style = { backgroundColor: l.backgroundColor, color: l.color };
    return (
      <span style={style} key={l.name}>
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
