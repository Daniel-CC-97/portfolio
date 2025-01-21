import { NextPage } from "next";
import { Profile } from "./components/profile";
import WorkExperience from "./components/work-experience";

import PremData from "./data/prem.json";
import ICCData from "./data/icc.json";
import AvonvaleBowlsData from "./data/avonvale.json";
import ContactMe from "./components/contact";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-[1512px] mx-auto">
        <Profile></Profile>
        {/* <div className="h-screen z-1"></div> */}

        <div className="min-h-screen z-10 relative">
          <WorkExperience data={PremData}></WorkExperience>
          <WorkExperience data={ICCData}></WorkExperience>
          <WorkExperience data={AvonvaleBowlsData}></WorkExperience>
          <ContactMe></ContactMe>
        </div>
      </div>
    </>
  );
};

export default Home;
