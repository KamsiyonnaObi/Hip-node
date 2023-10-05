import React from "react";
type Props = {
  children: React.ReactNode;
  className?: string;
  fillIcon: any;
};
export const SignUpButton = ({ children, className, fillIcon }: Props) => (
  <>
    <button className="rounded-lg bg-secondary6 px-[119px] py-3 font-bold dark:bg-dark4">
      <div className="flex gap-2.5">
        <div>{fillIcon}</div>
        <p className="display-semibold text-secondary2 dark:text-background2">
          {children}
        </p>
      </div>
    </button>
  </>
);
