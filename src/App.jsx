import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/description/description";
import Options from "./components/options/options";
import Feedback from "./components/feedback/feedback";
import Notification from "./components/notification/notification";
function App() {
  const [choice, handleChoice] = useState(() => {
    const savedChoice = window.localStorage.getItem("saved-choice");
    if (savedChoice !== null) {
      return JSON.parse(savedChoice);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  useEffect(() => {
    window.localStorage.setItem("saved-choice", JSON.stringify(choice));
  }, [choice]);
  const totalFeedback = choice.good + choice.neutral + choice.bad;
  const PositiveFeedback = Math.round((choice.good / totalFeedback) * 100);
  function updateFeedback(feedbackType) {
    switch (feedbackType) {
      case "good":
        handleChoice({
          ...choice,
          good: choice.good + 1,
        });
        break;
      case "neutral":
        handleChoice({
          ...choice,
          neutral: choice.neutral + 1,
        });
        break;
      case "bad":
        handleChoice({
          ...choice,
          bad: choice.bad + 1,
        });
        break;
    }
  }
  function resetState() {
    handleChoice({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  return (
    <>
      <Description />
      <Options
        onSelectFeedback={updateFeedback}
        handleReset={resetState}
        amount={totalFeedback}
      />
      {totalFeedback == 0 && <Notification />}
      {totalFeedback != 0 && (
        <Feedback
          myObj={choice}
          amount={totalFeedback}
          totalPositivPercents={PositiveFeedback}
        />
      )}
    </>
  );
}
export default App;
