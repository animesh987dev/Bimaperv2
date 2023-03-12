const Home = () => {
  return (
    <div className="glass">
      <div className="flex gap-40 p-10">
        <div className="flex w-1/2 grow">
          <div className="flex flex-col gap-5 part-box grow">
            <h1>Present</h1>
            <div className="box-1">
              <div className="bar mr-4 relative">
                <span className="growth">126.8k Cr</span>
                <span className="year">2022</span>
              </div>
              <div className="bar ml-4 relative h-3/4">
                <span className="growth">146.5k Cr</span>
                <span className="year">2023</span>
                <span className="bg-techBlue text-highGlow absolute right-1/2 translate-x-1/2 w-full text-center py-1 font-bold">
                  15.5%
                </span>
              </div>
            </div>
            <p className="text-highGlow">
              For B2B firms, marketing budgets as a percent of firm revenue fell
              within the 6-8% range <br />
              For B2C firms, marketing budgets as a percent of firm revenue were
              around 8-14% <br />
              Marketing budgets as a percent of overall firm budgets have been
              fairly consistent for B2B firms the past few years, in the 9-11%
              range, but avrage much higher for B2C companies, upto as much as
              20%
            </p>
          </div>
        </div>
        <div className="flex w-1/2 grow">
          <div className="flex flex-col gap-5 part-box grow">
            <h1>Prediction</h1>
            <div className="box-2">
              <p className="font-light text-8xl">172k Cr</p>
              <span className="text-xl flex justify-center items-center p-10 bg-techBlue text-highGlow font-bold top-4 right-4 absolute">
                18%
              </span>
              <span className="text-xl absolute font-bold top-4 left-4">
                2028
              </span>
            </div>
            <p className="text-highGlow">
              For B2B firms, marketing budgets as a percent of firm revenue fell
              within the 6-8% range <br />
              For B2C firms, marketing budgets as a percent of firm revenue were
              around 8-14% <br />
              Marketing budgets as a percent of overall firm budgets have been
              fairly consistent for B2B firms the past few years, in the 9-11%
              range, but avrage much higher for B2C companies, upto as much as
              20%
            </p>
          </div>
        </div>
      </div>
      <div className="p-10">
        <p className="text-techBlue font-semibold text-4xl">
          BIMAPER Assures You Saving Money In The Process, 'It'll Run Towards
          Low Cost & Better Effective Every Other Day'. <br />
          Only Spending on One Time Purchase of Your Product / Service Will Not
          Going to Get You A Regular Customer For Your Business <br />
          Allow BIMAPER to Help You Out with It !
        </p>
      </div>
    </div>
  );
};

export default Home;
