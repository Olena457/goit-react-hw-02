export default function Options({ onSelectFeedback, handleReset, amount }) {
  function handleGoodFeedback() {
    const feedBack = "good";
    onSelectFeedback(feedBack);
  }
  function handleNeutralFeedback() {
    const feedBack = "neutral";
    onSelectFeedback(feedBack);
  }
  function handleBadFeedback() {
    const feedBack = "bad";
    onSelectFeedback(feedBack);
  }
  function reset() {
    handleReset();
  }
  return (
    <ul className="containerBtns">
      <li>
        <button className="good" value={"good"} onClick={handleGoodFeedback}>
          Good
        </button>
      </li>
      <li>
        <button
          className="neutral"
          value={"neutral"}
          onClick={handleNeutralFeedback}
        >
          Neutral
        </button>
      </li>
      <li>
        <button className="bad" value={"bad"} onClick={handleBadFeedback}>
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
