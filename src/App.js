import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Bimaper from "./components/Bimaper";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");
  const activePage = (e) => {
    e.stopPropagation();
    setPage(e.target.innerText);
  };
  return (
    <div className="app-base">
      <NavBar func={activePage}></NavBar>
      {page === "Home" ? (
        <Home></Home>
      ) : page === "BIMAPER" ? (
        <Bimaper></Bimaper>
      ) : (
        ""
      )}
      {/* <Home></Home> */}
      {/* <Bimaper></Bimaper> */}
    </div>
  );
}

export default App;
