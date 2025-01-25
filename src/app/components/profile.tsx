"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Profile = () => {
  const texts = ["Web Developer", "Front-end Developer"];
  const [currentText, setCurrentText] = useState(0);
  const [typing, setTyping] = useState(true);
  const [animationOffset, setAnimationOffset] = useState(0); // For the image animation

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

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationOffset((prev) => (prev === 10 ? -10 : 10)); // Toggle between -20px and 20px
    }, 1000); // Change direction every 3 seconds

    return () => clearInterval(animationInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex content-center items-center justify-center flex-col-reverse min-h-screen lg:justify-between lg:items-center lg:flex-row">
      <div className="content lg:max-w-xl flex flex-col gap-0">
        <h1 className="title text-4xl font-semibold">
          <span className="text-3xl font-light text-gray-400">Hi,</span> <br />{" "}
          I&apos;m Daniel Cassell
        </h1>
        <div className="subtitle relative h-20 w-fit overflow-hidden">
          <div
            className={`typing-container absolute top-0 left-0 text-3xl font-medium ${
              typing ? "typing" : "deleting"
            } text-violet-400`}
          >
            {texts[currentText]}
          </div>
        </div>
        <div className="desc py-5 flex flex-col gap-2">
          <p className="text-gray-400">
            I am a skilled Frontend Developer with a strong passion for both
            problem-solving and developing great-looking applications. I
            specialise in JavaScript technologies and spend a lot of time
            working with Next.JS and Typescript.
          </p>
        </div>
        <div className="home-btns py-6 flex flex-wrap gap-4">
          <a href="mailto: daniel.cassell97@outlook.com">
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
      <div
        className="w-1/2"
        style={{
          transform: `translateY(${animationOffset}px)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        <Image
          className="rounded-full border-violet-600 border-2"
          alt="Profile Picture"
          src="/images/profile-pic.png"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
