'use client'

import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import ExperienceBlock from './components/experience-block';

import avonvaleData from './data/avonvale.json';
import premData from './data/prem.json';
import iccData from './data/icc.json';

const Home: NextPage = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight; // Maximum scroll value to fully fade out the first section
      const newOpacity = 1 - scrollTop / maxScroll;
      setOpacity(Math.max(newOpacity, 0)); // Ensure opacity doesn't go below 0
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <section 
          className="page flex min-h-screen items-center z-0 justify-center px-8 lg:px-48" 
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', opacity: opacity, transition: 'opacity 0.2s' }}
        >
          <div>
            <h1 className="text-5xl mb-3">
              Hi, my name is{' '}
              <span className="text-violet-400 text-7xl font-semibold">Daniel</span>
            </h1>
            <p className="text-lg">
              I am a skilled frontend developer specializing in JavaScript technologies,
              particularly React, React Native, and TypeScript. With a focus on creating
              dynamic and user-friendly applications, I bring expertise in building scalable
              web and mobile solutions. Passionate about innovation, I strive to deliver
              high-quality, impactful digital experiences.
            </p>
          </div>
        </section>

        <div className='relative z-1'>
          <section className="page flex items-center justify-center" style={{ marginTop: '100vh' }}>
            <ExperienceBlock
              title={avonvaleData.title}
              summary={avonvaleData.summary}
              imageUrl={avonvaleData.imageUrl}
              primaryColor={avonvaleData.primaryColor}
              primaryColorLight={avonvaleData.primaryColorLight}
              backgroundColor={avonvaleData.backgroundColor}
              techStack={avonvaleData.techStack}
              link={avonvaleData.link}
            />
          </section>

          <section className="page flex items-center justify-center">
            <ExperienceBlock
              title={premData.title}
              summary={premData.summary}
              imageUrl={premData.imageUrl}
              primaryColor={premData.primaryColor}
              primaryColorLight={premData.primaryColorLight}
              backgroundColor={premData.backgroundColor}
              techStack={premData.techStack}
              link={premData.link}
            />
          </section>

          <section className="page flex items-center justify-center">
            <ExperienceBlock
              title={iccData.title}
              summary={iccData.summary}
              imageUrl={iccData.imageUrl}
              primaryColor={iccData.primaryColor}
              primaryColorLight={iccData.primaryColorLight}
              backgroundColor={iccData.backgroundColor}
              techStack={iccData.techStack}
              link={iccData.link}
            />
          </section>

        </div>
      </div>
    </>
  );
};

export default Home;