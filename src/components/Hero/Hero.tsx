import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const heroData = {
  name: "Matthew Castle",
  introduction: "Hello there. I'm",
  description:
    "I'm a software developer with a focus on clean code, ease of use, and accessibility. I enjoy gaming, gardening and collecting rocks.",
  github: "https://github.com/mrcastle",
  linkedin: "https://www.linkedin.com/in/matthewraycastle/",
  email: "matt.castle@sleeplessjade.com",
};

function Hero() {
  const { name, introduction, description } = heroData;

  return (
    <div className=" mx-auto mt-40 px-8 py-16 bg-zinc-900 shadow-lg  bg-clip-padding bg-opacity-70 border border-zinc-900 backdrop-blur">
      <div className="max-w-2xl mx-auto text-left">
        <div className="text-xl">{introduction}</div>
        <div className="text-6xl mt-1 mb-4">{name}</div>
        <div className="text-xl mb-4">{description}</div>
        <div className="text-center">
          <FontAwesomeIcon icon={faGithub} size="3x" />

          <FontAwesomeIcon icon={faLinkedin} size="3x" className="mx-4" />

          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
