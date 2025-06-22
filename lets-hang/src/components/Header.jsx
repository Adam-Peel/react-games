import { useState } from "react";

function Header({ badGuessLimit, setAwaitingAPI, setBadGuessLimit }) {
  const [difficultyLevel, setDifficultyLevel] = useState("7");

  function handleChange(event) {
    setBadGuessLimit(Number(event.target.value));
    setDifficultyLevel(event.target.value);
  }

  return (
    <header>
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
          >
            <option value="9">Easy</option>
            <option value="7">Medium</option>
            <option value="5">Hard</option>
          </select>
        </span>
        <span>
          <button
            id="new-word-button"
            onClick={() => {
              setBadGuessLimit(Number(difficultyLevel));
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
