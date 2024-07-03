import { getExperiences } from "../../data/experience";

function WorkExperience() {
  const experiences = getExperiences();

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
