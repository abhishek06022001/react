import ParentComponent from "./components/ParentComponent";
import "./App.css";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import TestNav from "./components/TestNav";
import Layout from "./components/Layout";
import Home from "./components/Home";
import LayoutOfCards from "./components/LayoutOfCards";
import TestComponent from "./components/TestComponent";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import NavbarOnly from "./components/NavbarOnly";
import sidebar from "./assets/sidebar.png";

// ABHISHEK SAVE IT
function App() {
  return (
    <>
      <div className="parent">
        {/* <TestNav /> */}
        <NavbarOnly />
      <div className="flex ">
      <div className="left">
          <img src={sidebar} alt="" />
        </div>
        <div className="right">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TestNav />}></Route>
              <Route path="component1" element={<Component1 />} />
              <Route path="component2" element={<Component2 />} />
              <Route path="component3" element={<Component3 />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
