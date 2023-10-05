import React from "react";
type Props = {
  children?: React.ReactNode;
  className?: string;
};
export const Stage = ({ children, className }: Props) => {
  return (
    <>
      <button className="group flex rounded-lg bg-secondary6 p-4 focus:bg-red80 dark:bg-dark4 dark:focus:bg-red80">
        <p className="h3-semibold text-secondary2 group-focus:text-background2 dark:text-background2 dark:group-focus:text-background2">
          {children}
        </p>
      </button>
    </>
  );
};
