type WorkExperience = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

const experiences: WorkExperience[] = [
  {
    role: "Software Engineer II",
    company: "Planet DDS",
    duration: "March 2023 - January 2024",
    description:
      "Worked on developing and maintaining client communication and marketing insights services for dental practices.",
  },
  {
    role: "Senior Frontend Developer",
    company: "Armaments Research Company, Inc.",
    duration: "April 2021 - February 2023",
    description:
      "Led the frontend development creating mapping, visualization, and armory management apps for a firearms IoT device startup",
  },
  {
    role: "Software Developer",
    company: "Eleven Peppers Studios",
    duration: "February 2018 - March 2021",
    description:
      "Developer for a primarily design-focused company working on various contracts; TiVo and the Small Business Administration of note.",
  },
  {
    role: "Software Developer",
    company: "MetaCoastal",
    duration: "May 2017 - February 2018",
    description:
      "Assisted in the relaunch of an updated travel booking site and overhauled the Oracle Service Cloud integrations for a commercial travel company.",
  },
  {
    role: "Software Developer",
    company: "Anne Arundel County Register of Wills",
    duration: "October 2011 - April 2017",
    description:
      "Led the development of an in-house suite of office productivity, timekeeping, and customer support apps.",
  },
];

function WorkExperience() {
  return (
    <div className=" bg-zinc-900 shadow-lg bg-clip-padding bg-opacity-40 border-zinc-900 backdrop-blur-sm p-8 rounded-lg">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <ol className="relative border-s border-gray-200 dark:border-white-700">
          {experiences.map((experience, index) => (
            <li className="mb-10 ms-4" key={index}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-zinc-900 dark:bg-white-700"></div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-emerald-300">
                  {experience.role}
                </h3>
                <p className="text-gray-300">{experience.company}</p>
                <p className="text-gray-200 italic">{experience.duration}</p>
                <p className="text-white mt-2">{experience.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default WorkExperience;
