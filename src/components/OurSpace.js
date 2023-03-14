import { motion } from "framer-motion";

const OurSpace = () => {
  const anim = { opacity: 1, x: 0 };
  const init = { opacity: 0, x: "8rem" };
  return (
    <motion.div return animate={anim} initial={init} className="glass">
      <div className="bimaper-box-1 font-normal">
        <p className="text-3xl">
          Branding probably began around 2,700 BCE to Deter Theft of Cattles,
          Dating <br /> back to Ancient North Germanic Language ‘Old Norse’ The
          Word ‘Brand’ <br /> originally referred to "Mark Permanently with a
          Hot Iron" By the seventeenth <br /> century, It referred to a Mark of
          Ownership, In India We also Used to Identify <br /> Goods, Pottery
          etc. As Our History is Vast and Diverse, Archaeologists has <br />{" "}
          Found Out Proofs of Ancient Civilization and Brand Communication.
        </p>
        <p className="text-3xl mb-8">
          Ultimately Branding Evolves into an Image of a Particular which is
          Officially <br /> Authorized and Available Into Market Providing
          Reliable Product / Service.
        </p>
        <div className="flex">
          <div className="grow flex flex-col gap-4 font-semibold">
            <p className="w-2/3 text-3xl text-techBlue">
              In this Modern and Developing Era BIMAPER <br /> Differentiate
              Clients into Their #BizPool as <br /> Unique by Quality & The Way
              Clients Deliver <br /> Their Product / Service.
            </p>
            <p className="w-max text-3xl text-techBlue">
              As a Business of Modern World We Wishes <br /> to have People Ask
              and Demand More, Our <br /> Solution Determines Instant Rise in
              Online <br /> Traffic Towards Business which Gravitates <br /> in
              the Entity, BIMAPER is Low Cost, effective <br /> into Competitive
              Market.
            </p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </motion.div>
  );
};
export default OurSpace;
