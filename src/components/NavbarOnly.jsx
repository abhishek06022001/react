import React from "react";
import man from "../assets/man.png";
import exit from "../assets/exit.png";
import eparts from "../assets/DashBoard.png";
import interactiveepartsmanual from "../assets/InteractiveEpartsManual.png";
import stopper from "../assets/Vector.png";
function NavbarOnly() {
  return (
    <div>
      <div className="flex justify-between">
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
      </div>
    </div>
  );
}

export default NavbarOnly;
