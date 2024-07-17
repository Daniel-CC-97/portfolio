
import parse from 'html-react-parser';

interface Props {
    text: string;
}

const TextWithLineBreaks: React.FC<Props> = ({ text }) => {
    const formattedText = text.replace(/\*/g, '<br />');
    
    return (
        <p className='lg:w-3/4'>{parse(formattedText)}</p>
    );
};

export default TextWithLineBreaks;
