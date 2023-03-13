import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Bimaper from "./components/Bimaper";
import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";

function App() {
  const [page, setPage] = useState("Home");
  const activePage = (e) => {
    e.stopPropagation();
    setPage(e.target.innerText);
  };
  const transition = useTransition(page, {
    from: { x: 800, y: 0, opacity: 0, delay: 200 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 800, y: 0, opacity: 0, delay: 200 },
  });
  return (
    <div className="app-base">
      <NavBar func={activePage}></NavBar>
      {/* {page === "Home" ? (
        <Home></Home>
      ) : page === "BIMAPER" ? (
        <Bimaper></Bimaper>
      ) : (
        ""
      )} */}
      {transition((style, item) =>
        item === "BIMAPER" ? (
          <animated.div className="glass" style={style}>
            <Bimaper></Bimaper>
          </animated.div>
        ) : (
          ""
        )
      )}
      {transition((style, item) =>
        item === "Home" ? (
          <animated.div className="home-base" style={style}>
            <Home></Home>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default App;
