import contactData from "../data/contact.json";

const ContactMe = () => {
  const { links } = contactData;

  return (
    <div className="mt-6">
      <h2 className="text-violet-400 font-bold text-2xl">Info:</h2>
      <div className="flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.text}
            href={link.link}
            target="_blank"
            className="text-gray-400 flex items-center gap-1 hover:text-violet-500"
          >
            <h1>{link.text}</h1>
            <img
              className="rounded h-[24px] w-[24px]"
              src={link.image}
              alt="Description of SVG"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
