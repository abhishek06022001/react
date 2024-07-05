// import images like dat
import man from "../assets/man.png";
import exit from "../assets/exit.png";
import eparts from "../assets/DashBoard.png";
import interactiveepartsmanual from "../assets/InteractiveEpartsManual.png";
import stopper from "../assets/Vector.png";
import { Link, Outlet } from "react-router-dom";
function TestNav() {
  return (
    <>
      {/* <div className="flex justify-between">
        <div className="flex gap-5">
          <img src={interactiveepartsmanual} alt="" />
          <img src={stopper} alt="" />
          <img src={eparts} alt="" />

          <h2>Dashboard</h2>
        </div>
        <div className="flex gap-6">
          <input type="text" className="rounded-3xl" placeholder="Search" />

          <img src={man} alt="" />
          <img src={exit} alt="" />
        </div>
      </div> */}

      <div className="list_of_cards">
        <ul>
          <li>
            <Link to="/component1">Card 1</Link>
          </li>
          <li>
            <Link to="/component2">Card 2</Link>
          </li>
          <li>
            <Link to="/component3">Card 3</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TestNav;
