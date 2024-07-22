'use client'

import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { motion, useAnimation, AnimationControls } from 'framer-motion';
import ExperienceBlock from './components/experience-block';

import avonvaleData from './data/avonvale.json';
import premData from './data/prem.json';
import iccData from './data/icc.json';

import { getVideoById } from './lib/contentful';
import { VideoType } from './helpers/types'; // Adjust the path according to your project structure

const Home: NextPage = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [opacity, setOpacity] = useState<number>(1);
  const controls: AnimationControls = useAnimation();

  useEffect(() => {
    const fetchVideo = async () => {
      const videoData: VideoType | null = await getVideoById('4N9BFNf6IUYe7bsTaUMHMG'); // Replace with your video ID
      if (videoData && videoData.video.fields.file.url) {
        setVideoUrl(videoData.video.fields.file.url); // Adjust the field name based on your Contentful model
      }
    };

    fetchVideo();
  }, []);

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

  useEffect(() => {
    // Start animation when the component mounts
    controls.start({ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 2, delay: 1 } }).then(() => {
      // Animation complete
    });
  }, [controls]);

  return (
    <>
      <div className='overflow-hidden'>
        <section 
          className="page fixed w-screen top-0 left-0 w-full flex min-h-screen items-center justify-center px-8 lg:px-48"
          style={{ height: '100vh', overflow: 'hidden', opacity: opacity, transition: 'opacity 0.2s' }}
        >
          {videoUrl && (
            <video
              className="absolute top-0 left-0 w-full h-full object-cover -z-1 opacity-70"
              autoPlay
              muted
              loop
              playsInline // Ensure the video plays inline on mobile
              controls={false} // Hide controls
              ref={(video) => {
                if (video) video.playbackRate = 0.8; // Set the playback rate directly
              }}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}
          <motion.div
            className='z-0 max-w-screen-xl'
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }} // Initial state with blur
            animate={controls} // Use framer-motion controls
            transition={{ duration: 2 }} // Duration of the animation
            style={{ filter: 'blur(0px)' }} // Ensure the blur effect is applied
          >
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
          </motion.div>
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
              alignLeft={false}
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
