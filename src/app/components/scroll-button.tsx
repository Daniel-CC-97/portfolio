interface ScrollButtonProps {
  onClick: () => void;
  direction: 'up' | 'down';
  buttonColor: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ onClick, direction, buttonColor }) => {
    
  return (
    <button
      style={{ backgroundColor: buttonColor, transition: 'background-color .15s ease' }}
      className={`fixed ${direction === 'up' ? 'top-5' : 'bottom-5'} right-5 bg-violet-400 text-white p-3 rounded-full shadow-lg hover:bg-violet-500 focus:outline-none`}
      onClick={onClick}
    >
      {direction === 'up' ? '↑' : '↓'}
    </button>
  );
};

export default ScrollButton;

