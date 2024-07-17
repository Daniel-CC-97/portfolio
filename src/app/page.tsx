'use client'

import { useRef, useEffect, useState } from 'react';
import { NextPage } from 'next';
import ExperienceBlock from './components/experience-block';
import ScrollButton from './components/scroll-button';
import { interpolateColor } from './helpers/interpolate-colour';

import avonvaleData from './data/avonvale.json';
import premData from './data/prem.json';
import iccData from './data/icc.json';

const Home: NextPage = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [buttonColor, setButtonColor] = useState('');

  const backgroundColors = ['#000000', avonvaleData.backgroundColor, premData.backgroundColor, iccData.backgroundColor];
  const buttonColors = ['#a78bfa', avonvaleData.primaryColor, premData.primaryColor, iccData.primaryColor];

  useEffect(() => {
    const preventDefaultScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', preventDefaultScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', preventDefaultScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const totalSections = sectionRefs.current.length;
      const sectionIndex = Math.floor(scrollY / sectionHeight);
      const nextSectionIndex = Math.min(sectionIndex + 1, totalSections - 1);

      const factor = (scrollY % sectionHeight) / sectionHeight;
      const interpolatedColor = interpolateColor(backgroundColors[sectionIndex], backgroundColors[nextSectionIndex], factor);
      const interpolatedButtonColor = interpolateColor(buttonColors[sectionIndex], buttonColors[nextSectionIndex], factor);

      setBackgroundColor(interpolatedColor);
      setButtonColor(interpolatedButtonColor);
    };

    window.addEventListener('scroll', handleScroll);

    // Set initial background color based on scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sectionRefs.current.length) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    const currentIndex = sectionRefs.current.findIndex(
      (ref) => ref && ref.getBoundingClientRect().top >= 0
    );
    if (currentIndex !== -1 && currentIndex < sectionRefs.current.length - 1) {
      scrollToSection(currentIndex + 1);
    }
  };

  const scrollToPreviousSection = () => {
    const currentIndex = sectionRefs.current.findIndex(
      (ref) => ref && ref.getBoundingClientRect().top >= 0
    );
    if (currentIndex > 0) {
      scrollToSection(currentIndex - 1);
    }
  };

  return (
    <>
      <div style={{ backgroundColor, transition: 'background-color .15s ease' }}>
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

        <section ref={(el) => { sectionRefs.current[1] = el; }} className="page min-h-screen flex items-center justify-center px-8 lg:px-48">
          <ExperienceBlock
            title={avonvaleData.title}
            summary={avonvaleData.summary}
            imageUrl={avonvaleData.imageUrl}
            primaryColor={avonvaleData.primaryColor}
            primaryColorLight={avonvaleData.primaryColorLight}
            backgroundColor={avonvaleData.backgroundColor}
            techStack={avonvaleData.techStack}
          />
        </section>

        <section ref={(el) => { sectionRefs.current[2] = el; }} className="page min-h-screen flex items-center justify-center px-8 lg:px-48">
          <ExperienceBlock
            title={premData.title}
            summary={premData.summary}
            imageUrl={premData.imageUrl}
            primaryColor={premData.primaryColor}
            primaryColorLight={premData.primaryColorLight}
            backgroundColor={premData.backgroundColor}
            techStack={premData.techStack}
          />
        </section>

        <section ref={(el) => { sectionRefs.current[3] = el; }} className="page min-h-screen flex items-center justify-center px-8 lg:px-48">
          <ExperienceBlock
            title={iccData.title}
            summary={iccData.summary}
            imageUrl={iccData.imageUrl}
            primaryColor={iccData.primaryColor}
            primaryColorLight={iccData.primaryColorLight}
            backgroundColor={iccData.backgroundColor}
            techStack={iccData.techStack}
          />
        </section>
      </div>

      <ScrollButton onClick={scrollToPreviousSection} direction="up" buttonColor={buttonColor} />
      <ScrollButton onClick={scrollToNextSection} direction="down" buttonColor={buttonColor} />
    </>
  );
};

export default Home;



