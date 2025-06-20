import { useState } from "react";
import Key from "./Keys";

function Keyboard({
  checkLetterInWord,
  resetGame,
  setGameState,
  resetCounter,
  checkWord,
}) {
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
  }

  return (
    <section className="keyboard" key={resetCounter}>
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
      <div className="keys">
        <Key
          setGameState={setGameState}
          letter={"Q"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"W"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"E"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"R"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"T"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"Y"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"U"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"I"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"O"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"P"}
          checkLetterInWord={checkLetterInWord}
        />
        <br />
        <Key
          setGameState={setGameState}
          letter={"A"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"S"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"D"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"F"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"G"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"H"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"J"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"K"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"L"}
          checkLetterInWord={checkLetterInWord}
        />
        <br />
        <Key
          setGameState={setGameState}
          letter={"Z"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"X"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"C"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"V"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"B"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"N"}
          checkLetterInWord={checkLetterInWord}
        />
        <Key
          setGameState={setGameState}
          letter={"M"}
          checkLetterInWord={checkLetterInWord}
        />
      </div>
      <div>
        <button className="resetButton" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </section>
  );
}

export default Keyboard;
