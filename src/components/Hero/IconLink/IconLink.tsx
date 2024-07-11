import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconLinkProps = {
  icon: IconDefinition;
  url: string;
  isEmail?: boolean;
};
export function IconLink({ icon, url, isEmail }: IconLinkProps) {
  const href = isEmail ? `mailto:${url}` : url;

  return (
    <a
      href={href}
      target="_blank"
      className="text-white hover:text-emerald-300"
    >
      <FontAwesomeIcon icon={icon} size="3x" className="mx-2" />
    </a>
  );
}

export default IconLink;
