'use client'
import Image from "next/image";
import { WorkExperienceData } from "../helpers/types";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface WorkExperienceProps {
    data: WorkExperienceData;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
    const { title, summary, imageUrl, techStack, link } = data;
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

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
            <div className="mt-2 text-gray-400">
                {summary.map((summaryPoint, index) => (
                    <p key={index}>{summaryPoint}</p>
                ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-2" ref={ref}>
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="p-2 bg-violet-400 text-black-900 rounded font-bold"
                        variants={itemVariants}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        {tech}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
