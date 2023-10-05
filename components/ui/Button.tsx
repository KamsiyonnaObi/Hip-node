import React from "react";

interface Props {
  text: string;
  color: string;
  textColor: string;
  round: string;
  width: string;
  height: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  extraStyles?: string;
}

const Button = ({
  text,
  color,
  textColor,
  round,
  width,
  height,
  onClick,
  extraStyles,
}: Props) => {
  return (
    <button
      className={`h3-semibold flex items-center justify-center px-10 py-2 ${color} ${textColor} ${round} ${width} ${height} ${extraStyles}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
