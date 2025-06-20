function InfoBox({ gameState }) {
  return (
    <div className="infobox">
      <h2 id="infoBoxText">{gameState}</h2>
    </div>
  );
}

export default InfoBox;
