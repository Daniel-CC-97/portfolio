'use client'
import { useEffect, useState } from 'react';

export const Profile = () => {
  const texts = ["Web Developer", "Front-end Developer"];
  const [currentText, setCurrentText] = useState(0);
  const [typing, setTyping] = useState(true);
  const [opacity, setOpacity] = useState(1); // Initial opacity

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const fadeStart = 0; // Adjust based on when you want the fade to start
    const fadeEnd = 300; // Adjust based on when you want the fade to end
    const fadeRange = fadeEnd - fadeStart;

    if (scrollTop <= fadeStart) {
      setOpacity(1);
    } else if (scrollTop >= fadeEnd) {
      setOpacity(0);
    } else {
      const opacityValue = 1 - ((scrollTop - fadeStart) / fadeRange);
      setOpacity(opacityValue);
    }
  };

  useEffect(() => {
    // Set initial opacity based on the current scroll position
    handleScroll();

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    const typingDuration = 4000; // Duration of typing animation
    const deletingDuration = 1000; // Duration of deleting animation

    const typingTimeout = setTimeout(() => {
      setTyping(false);
    }, typingDuration);

    const deletingTimeout = setTimeout(() => {
      setTyping(true);
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, typingDuration + deletingDuration);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, [currentText, typing, texts.length]);

  return (
    <div className="fixed">
        <div className="relative w-screen min-h-screen flex justify-end items-center" style={{ opacity }}>
        <div className="w-screen sm:w-1/2 sm:min-w-[550px]">
            <div className="container px-6 text-gray-200 max-w-7xl relative z-20">
            <div className="content max-w-xl flex flex-col gap-0">
                <h1 className="title text-4xl font-semibold">
                <span className="text-3xl font-light text-gray-400">Hi,</span> <br /> I&apos;m Daniel Cassell
                </h1>
                <div className="subtitle relative h-20 w-fit overflow-hidden">
                <div
                    className={`typing-container absolute top-0 left-0 text-3xl font-medium ${typing ? 'typing' : 'deleting'} text-violet-400`}
                >
                    {texts[currentText]}
                </div>
                </div>
                <div className="desc py-5 flex flex-col gap-2">
                <p className="text-gray-400">
                    I am a skilled frontend developer specializing in JavaScript technologies, particularly Next.js and TypeScript. With a focus on creating dynamic and user-friendly applications, I bring expertise in building scalable web and mobile solutions. Passionate about innovation, I strive to deliver high-quality, impactful digital experiences.
                </p>
                </div>
                <div className="home-btns py-6 flex flex-wrap gap-4">
                <a href= "mailto: daniel.cassell97@outlook.com">
                    <button className="btn border-2 border-violet-400 text-violet-400 px-6 py-2 rounded-md hover:text-violet-300 hover:border-violet-300 transition-all duration-500">
                    let&apos;s talk
                    </button>
                </a>
                <a href="https://www.upwork.com/freelancers/~01c1cfaf8099d4136b?viewMode=1">
                    <button className="btn btn-primary border-2 bg-violet-600 border-violet-600 text-white px-6 py-2 rounded-md hover:bg-violet-400 hover:border-violet-400 transition-all duration-500">
                    Hire Me
                    </button>
                </a>
                </div>
            </div>
            </div>
        </div>
        <div className='w-1/2 h-screen bg-profile-pic bg-left bg-cover bg-no-repeat hidden sm:block'></div>
        </div>

    </div>
  );
};
