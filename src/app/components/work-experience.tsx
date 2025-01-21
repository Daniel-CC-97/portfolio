"use client";
import Image from "next/image";
import { WorkExperienceData } from "../helpers/types";

interface WorkExperienceProps {
  data: WorkExperienceData;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  const { title, summary, imageUrl, techStack, link } = data;

  return (
    <div className="my-6">
      <a href={link} className="flex items-center space-x-4">
        <h3 className="font-bold text-violet-500 text-2xl hover:text-violet-400">
          {title}
        </h3>
        <Image
          src={imageUrl}
          height={50}
          width={50}
          alt={`Logo image for ${title}`}
          className="inline-block"
        />
      </a>
      <div className="mt-2 text-gray-400">
        {summary.map((summaryPoint, index) => {
          const colonIndex = summaryPoint.indexOf(":");
          if (colonIndex !== -1) {
            // Split the string at the colon
            const beforeColon = summaryPoint.substring(0, colonIndex + 1);
            const afterColon = summaryPoint.substring(colonIndex + 1);

            return (
              <p key={index}>
                <strong className="text-violet-400">{beforeColon}</strong>
                {afterColon}
              </p>
            );
          }
          // If no colon is found, render the string as-is
          return <p key={index}>{summaryPoint}</p>;
        })}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="p-2 bg-violet-400 text-black-900 rounded font-bold"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
