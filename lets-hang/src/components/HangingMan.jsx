import { useEffect, useState } from "react";

function HangingMan({ badGuessLimit, word, setGameState, disableGameButtons }) {
  const [blockArray, setBlockArray] = useState([]);

  useEffect(() => {
    const generateBlockArray = () => {
      const blocks = [];

      if (badGuessLimit === 0) {
        blocks.push("💀");
        setGameState("Game Over! The word was: " + word);
        document.getElementById("difficulty").disabled = false;
        disableGameButtons(true);
        document.getElementById("word-form").disabled = true;
      }

      if (badGuessLimit === 1 || badGuessLimit === 2) {
        blocks.push("🔴");
      }

      if (badGuessLimit === 3 || badGuessLimit === 4) {
        blocks.push("🟠");
      } else if (badGuessLimit > 4) {
        blocks.push("🟢");
      }
      return blocks;
    };

    const updatedBlocks = generateBlockArray();
    setBlockArray(updatedBlocks);
  }, [badGuessLimit]);

  return (
    <div className="blockArray">
      <h3>
        You have: {badGuessLimit} guesses left: {blockArray}
      </h3>
    </div>
  );
}

export default HangingMan;
