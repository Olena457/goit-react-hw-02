export default function Options({ option, remove, amount }) {
  function expressionsGood() {
    const feedBack = "good";
    option(feedBack);
  }
  function expressionNeutral() {
    const feedBack = "neutral";
    option(feedBack);
  }
  function expressionBad() {
    const feedBack = "bad";
    option(feedBack);
  }
  function reset() {
    remove();
  }
  return (
    <ul className="containerBtns">
      <li>
        <button className="good" value={"good"} onClick={expressionsGood}>
          Good
        </button>
      </li>
      <li>
        <button
          className="neutral"
          value={"neutral"}
          onClick={expressionNeutral}
        >
          Neutral
        </button>
      </li>
      <li>
        <button className="bad" value={"bad"} onClick={expressionBad}>
          Bad
        </button>
      </li>
      {amount != 0 && (
        <li>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
