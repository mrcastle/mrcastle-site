import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { getUserData } from "../../data/user";

import IconLink from "./IconLink/IconLink";

function Hero() {
  const { name, introduction, description, github, linkedin, email } =
    getUserData();

  return (
    <div className="md:w-fit sm:w-full mx-auto mt-40 mb-96 px-8 py-16 bg-zinc-900 shadow-lg bg-clip-padding bg-opacity-40 border-zinc-900 backdrop-blur-sm md:rounded-lg">
      <div className="max-w-2xl mx-auto text-left">
        <div className="text-xl text-emerald-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {introduction}
        </div>
        <div className="text-4xl md:text-6xl mt-1 mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {name}
        </div>
        <div className="text-xl text-emerald-300 mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {description}
        </div>
        <div className="text-center">
          <IconLink icon={faGithub} url={github} />

          <IconLink icon={faLinkedin} url={linkedin} />

          <IconLink icon={faEnvelope} url={email} isEmail={true} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
