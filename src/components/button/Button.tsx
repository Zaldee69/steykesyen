type Props = {
  title: string;
  isFullsize?: boolean;
  width?: string;
  color?: string;
  type: "primary" | "secondary";
  customStyle?: string;
  onClickAction?: (
    _action: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`${props.isFullsize ? "w-full" : props.width} ${props.color} ${
        props.type === "primary"
          ? "bg-alpha text-white shadow-[0_8px_15px_rgba(50,82,223,0.3)] "
          : "bg-omega text-sigma"
      } h-10 rounded ${props.customStyle} `}
      onClick={props.onClickAction}
    >
      {props.title}
    </button>
  );
};

export default Button;
