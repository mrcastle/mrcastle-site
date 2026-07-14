import Orrery from "../../../../components/orrery/orrery";
import StarField from "../../../../components/star-field/star-field";
import HeroSection from "./hero-section/hero-section";
import WorkExperienceSection from "./work-experience-section/work-experience-section";

export function ResumePage() {
  return (
    <>
      <HeroSection />
      <WorkExperienceSection />
      <StarField />
      <Orrery />
    </>
  );
}
