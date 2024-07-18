'use client'

import { useRef } from 'react';
import { NextPage } from 'next';
import ExperienceBlock from './components/experience-block';

import avonvaleData from './data/avonvale.json';
import premData from './data/prem.json';
import iccData from './data/icc.json';

const Home: NextPage = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const sectionsData = [avonvaleData, premData, iccData];

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sectionRefs.current.length) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div>
        <nav className="fixed h-full top-0 right-0 flex flex-col justify-center gap-8 p-4 z-10">
          <button
            className="mx-2 px-4 py-2 font-bold rounded-lg bg-violet-400 text-black"
            onClick={() => scrollToSection(0)}
          >
            1
          </button>

          {sectionsData.map((section, index) => (
            <button
              key={index}
              className="mx-2 px-4 py-2 font-bold rounded-lg"
              style={{ backgroundColor: section.primaryColor, color: section.backgroundColor }}
              onClick={() => scrollToSection(index + 1)}
            >
              {index + 2}
            </button>
          ))}
        </nav>

        <div>
          <section ref={(el) => { sectionRefs.current[0] = el; }} className="page flex min-h-screen items-center justify-center px-8 lg:px-48">
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

          <section ref={(el) => { sectionRefs.current[1] = el; }} className="page flex items-center justify-center">
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

          <section ref={(el) => { sectionRefs.current[2] = el; }} className="page flex items-center justify-center">
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

          <section ref={(el) => { sectionRefs.current[3] = el; }} className="page flex items-center justify-center">
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




