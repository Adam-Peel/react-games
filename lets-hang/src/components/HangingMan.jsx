function HangingMan({ badGuessCount }) {
  const blockArray = [];
  for (let i = 0; i < badGuessCount; i++) {
    if (i < 4) blockArray.push("🟢");
    if (i > 3 && i < 7) blockArray.push("🟠");
    if (i > 6 && i < 9) blockArray.push("🔴");
    if (i === 9) blockArray.push("💀");
  }

  return <div className="blockArray">{blockArray}</div>;
}

export default HangingMan;
