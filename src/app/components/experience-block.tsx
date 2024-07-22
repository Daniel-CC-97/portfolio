import Image from 'next/image';
import { motion } from 'framer-motion';
import TextWithLineBreaks from './textWithLineBreaks';
import TechStack from './techStack';

interface ExperienceBlockProps {
    imageUrl: string;
    title: string;
    summary: string;
    primaryColor: string;
    primaryColorLight: string;
    backgroundColor: string;
    techStack: string[];
    link: string;
    alignLeft?: boolean; // New prop to determine alignment
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({
    imageUrl,
    title,
    summary,
    primaryColor,
    primaryColorLight,
    backgroundColor,
    techStack,
    link,
    alignLeft = true // Default to left alignment
}) => {
    return (
        <div 
            className={`w-full flex flex-col justify-center px-8 lg:px-48 py-8 lg:py-16 items-center`} 
            style={{ backgroundColor: backgroundColor }}
        >
            <div className='max-w-screen-xl flex flex-col'>
                <motion.a
                    href={link}
                    target="_blank" // Updated to open in a new tab
                    className={`font-bold text-4xl ${alignLeft ? '' : 'text-right'}`}
                    style={{ color: primaryColor }}
                    initial={{ opacity: 0, x: alignLeft ? -50 : 50, scale: 0.9 }} // Start animation from left or right with scale
                    whileInView={{ opacity: 1, x: 0, scale: 1 }} // Animate to original position with scale
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {title}
                </motion.a>
                <div className={`lg:flex pt-4 gap-4 items-center ${alignLeft ? 'flex-row-reverse' : ''}`}>
                    <motion.div
                        className="hidden lg:block relative" // Added relative class for positioning the shadow
                        initial={{ opacity: 0, x: alignLeft ? -50 : 50, rotate: alignLeft ? -10 : 10 }} // Start animation from left or right with rotation
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }} // Animate to original position with rotation
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <a href={link} target="_blank">
                            <Image
                                src={imageUrl}
                                alt="Website Logo"
                                width={300}
                                height={300}
                                quality={100}
                                className="drop-shadow-2xl" // Tailwind drop-shadow class for a stronger shadow
                            />
                        </a>
                    </motion.div>
                    <motion.div
                        className='w-full'
                        initial={{ opacity: 0, x: alignLeft ? -50 : 50, skewX: alignLeft ? -10 : 10 }} // Start animation from left or right with skew
                        whileInView={{ opacity: 1, x: 0, skewX: 0 }} // Animate to original position with skew
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <TextWithLineBreaks text={summary} alignLeft={alignLeft} />
                    </motion.div>
                </div>
                <motion.div
                    className={`pt-4 ${alignLeft ? '' : 'flex justify-end'}`}
                    initial={{ opacity: 0, x: alignLeft ? -50 : 50, y: 20 }} // Start animation from left or right with y-axis offset
                    whileInView={{ opacity: 1, x: 0, y: 0 }} // Animate to original position with y-axis offset
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <TechStack techStack={techStack} backgroundColor={primaryColorLight} color={backgroundColor} alignLeft={alignLeft} />
                </motion.div>
            </div>
        </div>
    );
};

export default ExperienceBlock;





