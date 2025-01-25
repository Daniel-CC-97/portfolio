import contactData from "../data/contact.json";

const ContactMe = () => {
  const { links } = contactData;

  return (
    <div className="mt-6">
      <hr className="border-grey-400 opacity-30"></hr>
      <h2 className="text-3xl text-gray-400 my-6 font-bold inline-block">
        Information
      </h2>
      <hr className="border-grey-400 opacity-30"></hr>
      <div className="flex flex-wrap my-6 gap-4">
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
