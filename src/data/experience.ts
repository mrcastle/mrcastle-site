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

export function getExperiences(): WorkExperience[] {
  return experiences;
}
