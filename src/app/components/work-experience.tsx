import Image from "next/image";
import { WorkExperienceData } from "../helpers/types";

interface WorkExperienceProps {
    data: WorkExperienceData;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
    const { title, summary, imageUrl, techStack, link } = data;

    return (
        <div className="p-6">
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
            <div className="mt-2">
                {summary.map((summaryPoint, index) => (
                    <p key={index}>{summaryPoint}</p>
                ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                {techStack.map((tech, index) => (
                    <div key={index} className="p-2 bg-violet-200 text-black-900 rounded font-bold">
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
