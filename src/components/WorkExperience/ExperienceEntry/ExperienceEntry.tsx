import { WorkExperience } from "../../../data/experience";

type ExperienceEntryProps = {
  experience: WorkExperience;
};

function ExperienceEntry({ experience }: ExperienceEntryProps) {
  const { company, role, duration, description, skills } = experience;

  return (
    <>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-2.5 -start-1.5 border border-white dark:border-zinc-900 dark:bg-white-700"></div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-emerald-400">{role}</h3>
        <p className="text-gray-300">{company}</p>
        <p className="text-gray-200 italic">{duration}</p>
        <p className="text-white mt-2">{description}</p>
        <div className="mt-4">
          {skills.map((skill, index) => (
            <span
              key={`${role}-skill-${index}`}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ExperienceEntry;
