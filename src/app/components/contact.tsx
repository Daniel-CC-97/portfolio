import contactData from '../data/contact.json';

const ContactMe = () => {

    const { links } = contactData;
    
    return (
        <div className="p-6">
            <h2 className="text-violet-400 font-bold text-2xl text-center md:text-start">Info:</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {links.map(link => (
                    <a key={link.text} href={link.link} target="_blank" className='text-gray-400 flex flex-col items-center hover:text-violet-500'>
                        <h1>{link.text}</h1>
                        <img className="rounded h-[48px] w-[48px]" src={link.image} alt="Description of SVG" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ContactMe;