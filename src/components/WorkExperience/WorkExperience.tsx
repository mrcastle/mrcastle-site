import { getExperiences } from "../../data/experience";
import ExperienceEntry from "./ExperienceEntry/ExperienceEntry";

function WorkExperience() {
  const experiences = getExperiences();

  return (
    <div className="md:w-fit sm:w-full mx-auto bg-zinc-900 shadow-lg bg-clip-padding bg-opacity-40 border-zinc-900 backdrop-blur-sm p-8 md:rounded-lg">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <ol className="relative border-s border-gray-200 dark:border-white-700">
          {experiences.map((experience, index) => (
            <li className="mb-10 ms-4" key={`experience-${index}`}>
              <ExperienceEntry experience={experience} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default WorkExperience;
