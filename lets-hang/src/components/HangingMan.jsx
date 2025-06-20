import { useEffect, useState } from "react";

function HangingMan({ badGuessCount }) {
  const [blockArray, setBlockArray] = useState([]);

  useEffect(() => {
    const generateBlockArray = () => {
      const blocks = [];
      for (let i = 0; i < badGuessCount; i++) {
        if (i < 3) {
          blocks.push("🟢");
        } else if (i < 6) {
          blocks.push("🟠");
        } else if (i < 8) {
          blocks.push("🔴");
        } else {
          blocks.push("💀");
        }
      }
      return blocks;
    };
    const updatedBlocks = generateBlockArray();
    setBlockArray(updatedBlocks);
  }, [badGuessCount]);

  return <div className="blockArray">{blockArray}</div>;
}

export default HangingMan;
