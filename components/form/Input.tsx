import React from "react";
type Props = {
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  value: any;
  onChange: any;
};

export const Input = ({ onChange, value, placeholder, children }: Props) => {
  return (
    <div className="flex w-[420px] items-center rounded-lg bg-secondary6 px-5 dark:bg-dark2">
      <input
        className="w-full rounded-lg bg-secondary6 py-[13px] text-secondary2 outline-none placeholder:text-secondary3 dark:bg-dark2 dark:text-background2 dark:placeholder:text-secondary3"
        placeholder={placeholder || "Type here"}
        value={value}
        onChange={onChange}
      />
      {children}
    </div>
  );
};
