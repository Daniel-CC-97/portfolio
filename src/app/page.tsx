'use client'

import { NextPage } from 'next';
import { Profile } from './components/profile';
import WorkExperience from './components/work-experience';

import PremData from './data/prem.json';
import ICCData from './data/icc.json';
import AvonvaleBowlsData from './data/avonvale.json';

const Home: NextPage = () => {
  return (
    <>
      <Profile></Profile>
      <div className='h-screen z-1'></div>
      
      <div className='h-screen z-10 relative'>
        <WorkExperience data={PremData}></WorkExperience>
        <WorkExperience data={ICCData}></WorkExperience>
        <WorkExperience data={AvonvaleBowlsData}></WorkExperience>
      </div>
    </>
  );
};


export default Home;
