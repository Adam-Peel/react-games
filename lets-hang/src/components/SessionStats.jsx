function SessionStats({ gameCount, winCount, cumulativeGameScore }) {
  function calculateScore(gameCount, cumulativeGameScore) {
    const score = (gameCount / cumulativeGameScore).toFixed(2);
    if (isNaN(score) || !isFinite(score)) {
      return "-";
    } else {
      return score;
    }
  }

  return (
    <div className="table session-stats">
      <table>
        <thead>
          <tr>
            <th>Games played</th>
            <th>Games won</th>
            <th>Average score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{gameCount}</td>
            <td>{winCount}</td>
            <td>{calculateScore(gameCount, cumulativeGameScore)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SessionStats;
