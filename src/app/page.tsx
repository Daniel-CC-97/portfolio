import { NextPage } from "next";
import { Profile } from "./components/profile";
import WorkExperience from "./components/work-experience";

import AvonvaleBowlsData from "./data/avonvale.json";
import PremData from "./data/prem.json";
import ICCData from "./data/icc.json";
import AdventourData from "./data/adventour.json";
import WeatherAppData from "./data/projects/weather-app.json";
import TypingTestData from "./data/projects/typing-test.json";
import ChatAppData from "./data/projects/chat-app.json";
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
          <hr className="border-grey-400 opacity-30"></hr>

          <WorkExperience data={AvonvaleBowlsData}></WorkExperience>
          <WorkExperience data={PremData}></WorkExperience>
          <WorkExperience data={ICCData}></WorkExperience>
          <WorkExperience data={AdventourData}></WorkExperience>

          <hr className="border-grey-400 opacity-30"></hr>
          <h2 className="text-3xl text-gray-400 my-6 font-bold inline-block">
            Personal Projects
          </h2>
          <hr className="border-grey-400 opacity-30"></hr>
          <WorkExperience data={WeatherAppData}></WorkExperience>
          <WorkExperience data={ChatAppData}></WorkExperience>
          <WorkExperience data={TypingTestData}></WorkExperience>

          <ContactMe></ContactMe>
        </div>
      </div>
    </>
  );
};

export default Home;
