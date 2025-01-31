export function Status({ gameStatus }) {
  const style = { backgroundColor: true ? "#10a95b" : "#BA2A2A" };
  return (
    <section className="game-status" style={style}>
      <h2>You Won / Lost!</h2>
      <p>You won! - You lose!</p>
    </section>
  );
}
