import Image from "next/image";
import Link from "next/link";

type Props = {
  height?: string;
  width?: string;
  labelStrong?: string;
  label?: string;
  cardCustomSyle?: string;
  imageCustomStyle?: string;
  title: string;
  location: string;
  imageSrc: string;
};

const Card: React.FC<Props> = (props) => {
  return (
    <Link
      href="#"
      className={`relative rounded ${props.cardCustomSyle} ${
        props.height ? props.height : "h-[215px]"
      } ${props.width ? props.width : "w-[361px]"} `}
    >
      {props.label && (
        <p className="text-white font-thin absolute px-6 py-2 rounded-tr-lg rounded-bl-lg text-sm right-0 bg-beta z-50">
          <span className="font-normal">{props.labelStrong}</span> {props.label}
        </p>
      )}
      <Image
        className={`rounded-2xl top-0 ${props.imageCustomStyle}`}
        src={props.imageSrc}
        fill
        alt="apa aka"
      />
      <article className="absolute text-white bottom-7 left-7">
        <p>{props.title}</p>
        <p className="text-sm font-thin">{props.location}</p>
      </article>
    </Link>
  );
};

export default Card;
