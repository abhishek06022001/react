import { Link } from "react-router-dom";
import Card from "./Card";

function LayoutOfCards() {
  return (
    <div>
      <ul className="flex gap-11">
        <li>
          <Link to="/dashboard">
            <Card num={1} />
          </Link>
        </li>
        <li>
          <Link to="/customer">
            <Card num={2} />
          </Link>
        </li>
        <li>
          <Link to="/models">
            <Card num={3} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LayoutOfCards;
