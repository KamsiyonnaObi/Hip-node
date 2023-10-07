import React from "react";
type Props = {
  children?: React.ReactNode;
  className?: string;
  divClassName?: string;
  placeholder?: string;
  value?: any;
  onChange?: any;
};

export const Input = ({
  onChange,
  value,
  placeholder,
  children,
  className,
  divClassName,
}: Props) => {
  return (
    <div className={`${divClassName}`}>
      <input
        className={`w-full rounded-lg bg-secondary6 py-[13px] text-secondary2 outline-none placeholder:text-secondary3 dark:bg-dark2 dark:text-background2 dark:placeholder:text-secondary3 ${className}`}
        placeholder={placeholder || "Type here"}
        value={value}
        onChange={onChange}
      />
      {children}
    </div>
  );
};
