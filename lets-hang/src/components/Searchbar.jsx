import { useState } from "react";

function Searchbar({ checkWord, setBadGuessCount, setGameState }) {
  const [guessedWord, setGuessedWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (checkWord(guessedWord)) {
      const letters = document.getElementsByClassName("letter");
      const lettersArray = Array.from(letters);
      lettersArray.forEach((letter) => {
        letter.classList.remove("hidden");
        letter.classList.add("visible");
      });
      return;
    }
    setGameState("Keep guessing...");
    setGuessedWord("");
    setBadGuessCount((prev) => {
      console.log(prev);
      prev + 1;
    });
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
