import React from "react";
type Props = {
  children?: React.ReactNode;
  className?: string;
  divClassName?: string;
  placeholder?: string;
  value?: any;
  name?: string;
  onChange?: any;
  type?: "text" | "password" | "email";
};

export const Input = ({
  onChange,
  value,
  name,
  type,
  placeholder,
  children,
  className,
  divClassName,
}: Props) => {
  return (
    <div className={`${divClassName}`}>
      <input
        name={name}
        className={` bg-secondary6 text-secondary2 outline-none placeholder:text-secondary3 dark:bg-dark2 dark:text-background2 dark:placeholder:text-secondary3 ${className}`}
        placeholder={placeholder || "Type here"}
        value={value}
        onChange={onChange}
        type={type}
      />
      {children}
    </div>
  );
};
