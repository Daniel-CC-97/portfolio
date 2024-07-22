
import parse from 'html-react-parser';

interface Props {
    text: string;
    alignLeft: boolean;
}

const TextWithLineBreaks: React.FC<Props> = ({ text, alignLeft }) => {
    const formattedText = text.replace(/\*/g, '<br />');
    
    return (
        <p className={`${alignLeft ? '' : 'text-right'}`}>{parse(formattedText)}</p>
    );
};

export default TextWithLineBreaks;
