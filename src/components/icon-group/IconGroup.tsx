import Image from "next/image";

type Props = {
  image: string;
  amount: number;
  title: string;
};

const IconGroup: React.FC<Props> = (props) => {
  return (
    <div>
      <Image
        src={`/images/${props.image}.svg`}
        height={30}
        width={30}
        alt={props.title}
      />
      <article>
        <p className="text-sm mt-3">
          <span className="text-gamma font-semibold">{props.amount}</span>
          <span className="text-psi ml-1">{props.title}</span>
        </p>
      </article>
    </div>
  );
};

export default IconGroup;
