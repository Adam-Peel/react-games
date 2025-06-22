import SessionStats from "./SessionStats";
import { Link } from "react-router";

function Footer({ gameCount, winCount, cumulativeGameScore, highScore }) {
  return (
    <footer>
      <SessionStats
        gameCount={gameCount}
        winCount={winCount}
        cumulativeGameScore={cumulativeGameScore}
      />
      <p>
        <Link to="/about">For instructions on how to play click here ℹ️</Link>
      </p>
    </footer>
  );
}

export default Footer;
