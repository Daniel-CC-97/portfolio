interface TechStackProps {
    techStack: string[];
    backgroundColor: string;
    color: string;
}

const TechStack: React.FC<TechStackProps> = ({ techStack, backgroundColor, color }) => {
    return (
        <div className="flex gap-3 mt-4 lg:w-2/3 flex-wrap">
            {techStack.map((tech, index) => (
                <h4 key={index} className="p-2 px-3 rounded-lg font-bold" style={{ backgroundColor, color }}>
                    {tech}
                </h4>
            ))}
        </div>
    );
};

export default TechStack;