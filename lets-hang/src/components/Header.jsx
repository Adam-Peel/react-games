function Header({ setAwaitingAPI, wordLength, setWordLength }) {
  function handleChange(event) {
    setWordLength(event.target.value);
  }

  return (
    <header>
      <div>
        <h1>Let's Hang!</h1>
      </div>
      <div id="header-buttons">
        <span>
          <select
            value={wordLength}
            name="difficulty"
            onChange={handleChange}
            className="difficulty-selector"
          >
            <option value="7">Set difficulty: defaults to medium</option>
            <option value="5">Easy</option>
            <option value="7">Medium</option>
            <option value="9">Hard</option>
          </select>
        </span>
        <span>
          <button id="new-word-button" onClick={() => setAwaitingAPI(true)}>
            Get new word
          </button>
        </span>
      </div>
    </header>
  );
}

export default Header;
