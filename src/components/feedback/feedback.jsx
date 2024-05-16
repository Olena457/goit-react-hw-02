export default function Feedback({ myObj, amount, totalPositivPercents }) {
  return (
    <ul className="feedback">
      <li>
        <p>Good:{myObj.good}</p>
      </li>
      <li>
        <p>Neutral:{myObj.neutral}</p>
      </li>
      <li>
        <p>Bad:{myObj.bad}</p>
      </li>
      <li>
        <p>Total:{amount}</p>
      </li>
      <li>
        <p>Positive:{totalPositivPercents}%</p>
      </li>
    </ul>
  );
}
