import React from "react";
type Props = {
  children?: React.ReactNode;
  className?: string;
  color?: "orange" | "blue" | "transparent";
  disabled?: boolean;
  rounded?: boolean;
  full?: boolean;
  padded?: boolean;
};

export const Button = ({
  children,
  className,
  disabled = false,
  full = false,
  rounded = false,
  color = "orange",
  padded = false,
}: Props) => {
  const colorMap = {
    orange: "bg-red80",
    blue: "bg-blue",
    transparent: "bg-transparent",
  };
  const textColorMap = {
    orange: "text-background2",
    blue: "text-background",
    transparent: "text-secondary3",
  };

  return (
    <button
      disabled={disabled}
      className={`${className} flex gap-x-2 ${rounded && "rounded-[20px]"} ${
        full && "w-full"
      } h3-semibold rounded-lg ${colorMap[color]} ${
        padded && "px-[10px] py-[2.5px]"
      } ${textColorMap[color]} disabled:bg-red60`}
    >
      {children}
    </button>
  );
};
