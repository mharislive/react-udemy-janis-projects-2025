import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ServiceCardProps = {
  icon: IconDefinition;
  title: string;
  content: string;
};

const ServiceCard = (props: ServiceCardProps) => {
  const { content, title, icon } = props;

  return (
    <article className="flex gap-4 flex-1">
      <div className="p-2 bg-cyan-500 text-cyan-900 text-4xl self-start">
        <FontAwesomeIcon icon={icon} aria-label={title} data-testid="icon" />
      </div>
      <div>
        <h3 className="capitalize tracking-widest font-bold mb-2">{title}</h3>
        <p className="text-slate-500">{content}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
