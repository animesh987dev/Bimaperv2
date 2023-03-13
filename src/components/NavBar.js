import logo from "../images/Logo.png";
import n1 from "../images/n1.png";
import n2 from "../images/n2.png";
import n3 from "../images/n3.png";
import n4 from "../images/n4.png";
import n5 from "../images/n5.png";
import n6 from "../images/n6.png";
import flag from "../images/Flag.png";
import { useState } from "react";

const NavBar = (props) => {
  const data1 = [
    { name: "BIMAPER", ico: logo, cls: "text-4xl" },
    { name: "Our Space", ico: n1, cls: "text-2xl" },
    { name: "Our Method", ico: n2, cls: "text-2xl" },
    { name: "Our Capability", ico: n3, cls: "text-2xl" },
    { name: "Our Creation", ico: n4, cls: "text-2xl" },
  ];
  const data2 = [
    { name: "Explain Me", ico: n5, cls: "text-2xl" },
    { name: "Our Diary", ico: n6, cls: "text-2xl" },
  ];
  const [expand, setExpand] = useState(false);

  const toggle = () => {
    setExpand(!expand);
  };

  return (
    <div onClick={toggle} className={`nav-base${expand ? " exp-div" : ""}`}>
      <div className="nav-wrap">
        {data1.map((item) => (
          <div className="nav-box" key={item.name}>
            {expand ? (
              <h2 onClick={props.func} className={item.cls + " nav-txt"}>
                {item.name}
              </h2>
            ) : (
              <img className="ico" src={item.ico} alt="Company logo" />
            )}
          </div>
        ))}
      </div>
      <div className="nav-wrap">
        {data2.map((item) => (
          <div className="nav-box" key={item.name}>
            {expand ? (
              <h2 onClick={props.func} className={item.cls + " nav-txt"}>
                {item.name}
              </h2>
            ) : (
              <img className="ico" src={item.ico} alt="Company logo" />
            )}
          </div>
        ))}
      </div>
      <img className="flag" src={flag} alt="Indian Flag" />
    </div>
  );
};

export default NavBar;
