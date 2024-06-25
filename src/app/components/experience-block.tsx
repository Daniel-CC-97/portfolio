import Image from "next/image";

interface ExperienceBlockProps {
    imageUrl: string;
    title: string;
    summary: string;
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ imageUrl, title, summary }) => {
    return (
        <div className="w-full h-full border border-violet-900 rounded-lg p-4">
            <h1 className="text-violet-400 font-bold text-2xl">{title}</h1>
            <div className="flex justify-between pt-4 gap-4 items-center">
                <p>{summary}</p>
                <Image
                    src={imageUrl}
                    alt="Hero Image"
                    width={400}
                    height={400}
                    quality={100}
                />
            </div>
        </div>
    );
};

export default ExperienceBlock;
