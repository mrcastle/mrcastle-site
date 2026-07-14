import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconLinkProps = {
  icon: IconDefinition;
  url: string;
  isEmail?: boolean;
};
export function IconLink({ icon, url, isEmail }: IconLinkProps) {
  const href = isEmail ? `mailto:${url}` : url;

  return (
    <a href={href} target="_blank">
      <FontAwesomeIcon
        icon={icon}
        size="3x"
        className="mx-2 text-white hover:text-emerald-300"
      />
    </a>
  );
}

export default IconLink;
