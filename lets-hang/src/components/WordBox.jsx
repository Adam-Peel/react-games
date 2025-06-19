import LetterDisplay from "./LetterDisplay";
import InfoBox from "./InfoBox";

function WordBox({ word, letterCheck, gameState }) {
  return (
    <div>
      <InfoBox gameState={gameState} />
      <LetterDisplay word={word} letterCheck={letterCheck} />
    </div>
  );
}

export default WordBox;
