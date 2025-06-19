function HangingMan({ badGuessCount }) {
  const blockArray = [];
  for (let i = 0; i < badGuessCount; i++) {
    if (i < 3) blockArray.push("🟢");
    if (i > 2 && i < 6) blockArray.push("🟠");
    if (i > 5 && i < 8) blockArray.push("🔴");
    if (i === 8) blockArray.push("💀");
  }

  return <div className="blockArray">{blockArray}</div>;
}

export default HangingMan;
