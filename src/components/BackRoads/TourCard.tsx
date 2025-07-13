import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TourCardProps = {
  content: string;
  image: string;
  date: string;
  title: string;
  country: string;
  duration: string;
  price: string;
};

const TourCard = (props: TourCardProps) => {
  const { content, image, date, title, country, duration, price } = props;

  return (
    <div className="flex flex-col flex-1 shadow hover:shadow-2xl hover:scale-105 transition duration-500">
      <div className="relative">
        <img src={image} alt={title} className="w-full" />
        <span className="absolute bottom-0 right-0 bg-cyan-300 px-2 py-1 capitalize">
          {date}
        </span>
      </div>
      <div className="py-5 px-6 bg-slate-100">
        <h3 className="font-bold tracking-widest mb-3 capitalize">{title}</h3>
        <p className="text-slate-500 mb-5">{content}</p>
        <div className="flex items-center justify-between text-cyan-500">
          <span className="capitalize">
            <FontAwesomeIcon icon={faMap} /> {country}
          </span>
          <span>{duration}</span>
          <span>{`From ${price}`}</span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
