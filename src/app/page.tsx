import { NextPage } from "next";
import { Profile } from "./components/profile";
import WorkExperience from "./components/work-experience";

import PremData from "./data/prem.json";
import ICCData from "./data/icc.json";
import AvonvaleBowlsData from "./data/avonvale.json";
import WeatherAppData from "./data/projects/weather-app.json";
import ContactMe from "./components/contact";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-[1512px] px-6 pb-6 mx-auto">
        <Profile></Profile>
        {/* <div className="h-screen z-1"></div> */}

        <div className="min-h-screen z-10 relative">
          <hr className="border-grey-400 opacity-30"></hr>

          <h2 className="text-3xl text-gray-400 my-6 font-bold inline-block">
            Professional Experience
          </h2>
          <div className="">
            <hr className="border-grey-400 opacity-30"></hr>

            <WorkExperience data={PremData}></WorkExperience>

            <WorkExperience data={ICCData}></WorkExperience>

            <WorkExperience data={AvonvaleBowlsData}></WorkExperience>
          </div>

          <hr className="border-grey-400 opacity-30"></hr>
          <h2 className="text-3xl text-gray-400 my-6 font-bold inline-block">
            Personal Projects
          </h2>
          <hr className="border-grey-400 opacity-30"></hr>
          <WorkExperience data={WeatherAppData}></WorkExperience>

          <ContactMe></ContactMe>
        </div>
      </div>
    </>
  );
};

export default Home;
