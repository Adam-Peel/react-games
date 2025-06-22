import { useState } from "react";

function Header({ setAwaitingAPI, setBadGuessLimit, setScoreMultiplier }) {
  const [difficultyLevel, setDifficultyLevel] = useState(10);

  function handleChange(event) {
    setBadGuessLimit(Number(event.target.value));
    setDifficultyLevel(Number(event.target.value));
    setScoreMultiplier(10 / Number(event.target.value));
  }

  return (
    <header key={difficultyLevel}>
      <div id="header-banner">
        <h1>Let's Hang! </h1>
      </div>
      <div id="header-buttons">
        <span>
          <label>Set difficulty:</label>
          <select
            id="difficulty"
            onChange={handleChange}
            className="difficulty-selector"
            key={difficultyLevel}
          >
            <option value="10">Easy</option>
            <option value="8">Medium</option>
            <option value="6">Hard</option>
          </select>
        </span>
        <span>
          <button
            id="new-word-button"
            onClick={() => {
              document.getElementById("difficulty").disabled = true;
              setAwaitingAPI(true);
            }}
          >
            Get new word
          </button>
        </span>
      </div>
    </header>
  );
}

export default Header;
