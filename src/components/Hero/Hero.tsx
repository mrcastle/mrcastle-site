import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const heroData = {
  name: "Matthew Castle",
  introduction: "Hello there. I'm",
  description:
    "Seattle based software developer with a focus on clean code, ease of use, and accessibility. I enjoy gaming, gardening and gathering gemstones.",
  github: "https://github.com/mrcastle",
  linkedin: "https://www.linkedin.com/in/matthewraycastle/",
  email: "matt.castle@sleeplessjade.com",
};

function Hero() {
  const { name, introduction, description, github, linkedin, email } = heroData;

  return (
    <div className="mx-auto mt-40 mb-96 px-8 py-16 bg-zinc-900 shadow-lg  bg-clip-padding bg-opacity-40 border-zinc-900 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto text-left">
        <div className="text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {introduction}
        </div>
        <div className="text-6xl mt-1 mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {name}
        </div>
        <div className="text-xl mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {description}
        </div>
        <div className="text-center">
          <a
            href={github}
            target="_blank"
            className="text-white hover:text-emerald-300"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>

          <a
            href={linkedin}
            target="_blank"
            className="text-white hover:text-emerald-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" className="mx-4" />
          </a>

          <a
            href={`mailto:${email}`}
            target="_blank"
            className="text-white hover:text-emerald-300"
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
