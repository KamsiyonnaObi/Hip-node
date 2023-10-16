import React from "react";
type Props = {
  children?: React.ReactNode;
  className?: string;
  color?: "orange" | "blue" | "blackWhite" | "white" | "gray" | "transparent";
  disabled?: boolean;
  rounded?: boolean;
  full?: boolean;
  onclock?: () => void;
};

export const Button = ({
  onclock,
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
    white: "bg-background2",
    gray: "bg-secondary6 dark:bg-dark4",
    blackWhite: "bg-background2 dark:bg-dark4",
    transparent: "bg-transparent",
  };
  const textColorMap = {
    orange: "text-background2",
    blue: "text-background",
    black: "text-background2",
    gray: "text-secondary2 dark:text-background2",
    white: "text-red80",
    blackWhite: "text-secondary3",
    transparent: "text-secondary3",
  };

  return (
    <button
      disabled={disabled}
      onClick={onclock}
      className={`${className} flex gap-x-2.5 ${rounded && "rounded-[20px]"} ${
        full && "w-full"
      } h3-semibold rounded-lg ${colorMap[color]} ${
        textColorMap[color]
      } disabled:bg-red60`}
    >
      {children}
    </button>
  );
};
