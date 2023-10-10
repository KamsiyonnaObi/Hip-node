import React from "react";
type Props = {
  children: React.ReactNode;
  className?: string;
  fillIcon: any;
};
export const Info = ({ children, className, fillIcon }: Props) => (
  <>
    <div className="flex max-w-[402px] items-center gap-5 bg-white dark:bg-dark3">
      <div
        className={`${className} flex rounded-lg bg-red10 p-5 dark:bg-dark4`}
      >
        {fillIcon}
      </div>
      <div className="flex">
        <p className="h3-semibold text-secondary2 dark:text-secondary6">
          {children}
        </p>
      </div>
    </div>
  </>
);
