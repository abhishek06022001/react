import { Link, Outlet } from "react-router-dom";
import ParentComponent from "./ParentComponent";
import TestNav from "./TestNav";
import Home from "./Home";

function Layout() {
  return (
    <>
      <ParentComponent>
        <TestNav />
        <Link to="/home">Some random Card</Link>
        <Outlet />
      </ParentComponent>
      
    </>
  );
}

export default Layout;
