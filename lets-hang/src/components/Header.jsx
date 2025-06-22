import { useState } from "react";

function Header({
  setAwaitingAPI,
  setBadGuessLimit,
  setScoreMultiplier,
  gameCount,
}) {
  function handleChange(event) {
    setBadGuessLimit(Number(event.target.value));
    setScoreMultiplier(10 / Number(event.target.value));
    setDifficulty(Number(event.target.value));
    if (gameCount > 0) {
      document.getElementById("info-display").textContent = "";
    }
  }

  const [difficulty, setDifficulty] = useState(10);

  return (
    <header>
      <div id="header-banner">
        <h1>
          <u>H</u>&nbsp;
          <u>a</u>&nbsp;
          <u>n</u>&nbsp;
          <u>g</u>&nbsp;
          <u>&nbsp;&nbsp;</u>&nbsp;
          <u>a</u>&nbsp;
          <u>n</u>
        </h1>
      </div>
      <div id="header-buttons">
        <span>
          <label>Set difficulty:</label>
          <select
            id="difficulty"
            onChange={handleChange}
            className="difficulty-selector"
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
              setBadGuessLimit(difficulty);
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
