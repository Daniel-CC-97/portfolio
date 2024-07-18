import Image from 'next/image';
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
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ imageUrl, title, summary, primaryColor, primaryColorLight, backgroundColor, techStack, link }) => {
    return (
        <div className="w-full px-8 lg:px-48 py-16" style={{ backgroundColor: backgroundColor }}>
            <a  href={link} target="/" className="font-bold text-4xl" style={{ color: primaryColor }}>{title}</a>
            <div className="lg:flex justify-between pt-4 gap-4 items-center">
                <TextWithLineBreaks text={summary}></TextWithLineBreaks>
                <div className="hidden lg:block">
                    <Image
                        src={imageUrl}
                        alt="Hero Image"
                        width={300}
                        height={300}
                        quality={100}
                    />
                </div>
            </div>
            <TechStack techStack={techStack} backgroundColor={primaryColorLight} color={backgroundColor}></TechStack>
        </div>
    );
};

export default ExperienceBlock;

