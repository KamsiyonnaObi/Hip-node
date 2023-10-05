import React from "react";
type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const NextButton = ({ children, className }: Props) => {
  return (
    <>
      <button
        disabled
        className={`${className} h3-semibold rounded-lg bg-red80 px-10 py-2.5 text-background2 disabled:bg-red60`}
      >
        {children}
      </button>
    </>
  );
};
