import data from './data.json';
import { NextPage } from 'next';
import ExperienceBlock from './components/experience-block';
import VideoBackground from './components/video-background';

// Define types/interfaces for data if needed
interface Data {
  bowlsSummary: string;
  premSummary: string;
  iccSummary: string;
}

// Component definition
const Home: NextPage = () => {
  return (
    <>
      <VideoBackground />

      <section className="page flex min-h-screen items-center justify-center p-48">
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

      <section className="page min-h-screen flex items-center justify-center p-48">
        <ExperienceBlock
          title="Avonvale Bowls Club"
          summary={data.bowlsSummary}
          imageUrl="/images/avonvale-logo.png"
        />
      </section>

      <section className="page min-h-screen flex items-center justify-center p-48">
        <ExperienceBlock
          title="The Premier League"
          summary={data.premSummary}
          imageUrl="/images/Premier-League-Logo.png"
        />
      </section>

      <section className="page min-h-screen flex items-center justify-center p-48">
        <ExperienceBlock
          title="The ICC"
          summary={data.iccSummary}
          imageUrl="/images/ICC-logo.webp"
        />
      </section>
    </>
  );
};

export default Home;

