import { useState } from "react";

function Searchbar({
  checkWord,
  setBadGuessCount,
  setGameState,
  badGuessCount,
}) {
  const [guessedWord, setGuessedWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let guesses = badGuessCount;
    if (checkWord(guessedWord)) {
      const letters = document.getElementsByClassName("letter");
      document.getElementById("word-form").disabled = true;
      const lettersArray = Array.from(letters);
      lettersArray.forEach((letter) => {
        letter.classList.remove("hidden");
        letter.classList.add("visible");
      });
      return;
    }
    setGameState("Keep guessing...");
    setGuessedWord("");
    setBadGuessCount(guesses + 1);
    document.getElementById("word-form").value = "";
  }

  return (
    <div className="wordsearch">
      <form onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            placeholder="guess whole word..."
            className="word-input"
            onChange={(event) => setGuessedWord(event.target.value)}
            id="word-form"
          ></input>
        </span>
        <span>
          <button className="wordsearch-button" type="submit">
            ❔
          </button>
        </span>
      </form>
    </div>
  );
}

export default Searchbar;
