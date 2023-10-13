import React from "react";
type Props = {
  children?: React.ReactNode;
  className?: string;
  color?: "orange" | "blue" | "blackWhite" | "white" | "transparent";
  disabled?: boolean;
  rounded?: boolean;
  full?: boolean;
};

export const Button = ({
  children,
  className,
  disabled = false,
  full = false,
  rounded = false,
  color = "orange",
}: Props) => {
  const colorMap = {
    orange: "bg-red80",
    blue: "bg-blue",
    blackWhite: "bg-background2 dark:bg-dark4",
    transparent: "bg-transparent",
  };
  const textColorMap = {
    orange: "text-background2",
    blue: "text-background",
    black: "text-background2",
    white: "text-red80",
    blackWhite: "text-secondary3",
    transparent: "text-secondary3",
  };

  return (
    <button
      disabled={disabled}
      className={`${className} flex gap-x-2 ${rounded && "rounded-[20px]"} ${
        full && "w-full"
      } h3-semibold rounded-lg ${colorMap[color]} ${
        textColorMap[color]
      } disabled:bg-red60`}
    >
      {children}
    </button>
  );
};
