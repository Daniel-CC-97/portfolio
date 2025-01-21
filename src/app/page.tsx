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
      <div className="max-w-[1512px] px-6 pb-6 mx-auto">
        <Profile></Profile>
        {/* <div className="h-screen z-1"></div> */}

        <div className="min-h-screen z-10 relative">
          <h2 className="text-3xl text-gray-400 mb-6 font-bold inline-block">
            Professional Experience
          </h2>
          <hr className="border-grey-400 opacity-30"></hr>

          <WorkExperience data={PremData}></WorkExperience>
          <hr className="border-grey-400 opacity-30"></hr>

          <WorkExperience data={ICCData}></WorkExperience>
          <hr className="border-grey-400 opacity-30"></hr>

          <WorkExperience data={AvonvaleBowlsData}></WorkExperience>
          <hr className="border-grey-400 opacity-30"></hr>

          <ContactMe></ContactMe>
        </div>
      </div>
    </>
  );
};

export default Home;
