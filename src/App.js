//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore, setLionScore] = useState(0);
  const [tigerScore, setTigerScore] = useState(0);
  const [quarter, setQuarter] = useState(0);
  // console.log(calculateScore(lionScore, 7))

  const changeQuarter = () => {
    setQuarter(quarter + 1)
  }

  const calculateScore = (team, number) => {
    
    if (team === "home") {
      setLionScore(lionScore + number)
    } else if (team === "away") {
      setTigerScore(tigerScore + number)
    }
  }

  // console.log(calculateScore(lionScore, 7))

  // const lionTouchdown = () => {
  //   setLionScore(lionScore + 7);
  // };

  // const lionFieldGoal = () => {
  //   setLionScore(lionScore + 3);
  // };

  // const tigerTouchdown = () => {
  //   setTigerScore(tigerScore + 7);
  // };

  // const tigerFieldGoal = () => {
  //   setTigerScore(tigerScore + 3);
  // };

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={lionScore} awayScore={tigerScore}/>
        <BottomRow whichQuarter={quarter} changeQuarter={event => changeQuarter()} />
      </section>
      <section className="buttons">
        <HomeButtons homeTouchdown={event => calculateScore("home", 7)} homeFieldGoal={event => calculateScore("home", 3)} />
        <AwayButtons awayTouchdown={event => calculateScore("away", 7)} awayFieldGoal={event => calculateScore("away", 3)} />
      </section>
    </div>
  );
}

export default App;
