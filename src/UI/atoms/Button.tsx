import { ReactNode } from "react";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Outline = "outline",
}

interface IProps {
  type: ButtonType;
  children: ReactNode;
  onClick: () => void;
}

const Button = (props: IProps) => {
  const { type, children, onClick } = props;
  return (
    <button onClick={onClick} className="btn btn-outline">
      {children}
    </button>
  );
};

export default Button;
