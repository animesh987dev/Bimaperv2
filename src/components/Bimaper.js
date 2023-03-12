import b1 from "../images/bimaper.png";

const Bimaper = () => {
  return (
    <div className="glass">
      <div className="text-highGlow flex gap-4 flex-col justify-center items-center py-10 px-15">
        <div>
          <h1 className="text-5xl font-light">
            We All Need An Easily Accessible BIMAPER <br /> To Have A Presence
            We Desire In Real Online World...
          </h1>
          <p className="text-2xl font-semibold mb-8">
            To Address a Rising Demand into the Segment, Our Cost Effective
            Solutions are Performance <br /> Oriented Image of a Brand to Reach
            it's Maximum Capacity for Greater Business Across.
          </p>
          <img className="splash-img" src={b1} alt="Bimaper splash art" />
        </div>
        <div className="flex w-full justify-between px-10">
          <p className="socials">BIMAPER</p>
          <p className="socials">BIMAPER</p>
          <p className="socials">BIMAPER</p>
          <p className="socials">BIMAPER</p>
          <p className="socials">BIMAPER</p>
        </div>
      </div>
    </div>
  );
};

export default Bimaper;
