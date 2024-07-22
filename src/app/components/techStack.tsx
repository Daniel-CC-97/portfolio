import { motion } from 'framer-motion';

interface TechStackProps {
    techStack: string[];
    backgroundColor: string; // Expecting a Tailwind color or a valid CSS color
    color: string; // Expecting a Tailwind color or a valid CSS color
    alignLeft: boolean;
}

const TechStack: React.FC<TechStackProps> = ({ techStack, backgroundColor, color, alignLeft }) => {
    // Define the animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            className={`flex gap-3 mt-4 lg:w-2/3 flex-wrap ${alignLeft ? '' : 'justify-end'}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Ensure animation happens only once
        >
            {techStack.map((tech, index) => (
                <motion.h4
                    key={index}
                    className={`p-2 px-3 rounded-lg font-bold transition-transform duration-300 ease-in-out`}
                    style={{
                        backgroundColor, color,
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Stronger shadow
                    }}
                    variants={itemVariants}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)', // Enhanced shadow on hover
                    }}
                    viewport={{ once: true }} // Ensure animation happens only once
                >
                    {tech}
                </motion.h4>
            ))}
        </motion.div>
    );
};

export default TechStack;
