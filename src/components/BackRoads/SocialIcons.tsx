import {
  faFacebook,
  faSquarespace,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SocialIconsProps = React.HTMLAttributes<HTMLElement> & {
  label?: string;
  color?: string;
};

const SocialIcons = (props: SocialIconsProps) => {
  const { label = "social icons", color = "text-cyan-500", className } = props;

  return (
    <nav aria-label={label} className={`flex gap-3 ${className}`}>
      <a
        href="#"
        className={`${color} hover:text-cyan-300`}
        aria-label="facebook"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" aria-hidden="true" />
      </a>
      <a
        href="#"
        className={`${color} hover:text-cyan-300`}
        aria-label="twitter"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" aria-hidden="true" />
      </a>
      <a
        href="#"
        className={`${color} hover:text-cyan-300`}
        aria-label="squarespace"
      >
        <FontAwesomeIcon icon={faSquarespace} size="2x" aria-hidden="true" />
      </a>
    </nav>
  );
};

export default SocialIcons;
