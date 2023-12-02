import React from "react";
type Props = {
  children?: React.ReactNode;
  frontChildren?: React.ReactNode;
  className?: string;
  divClassName?: string;
  placeholder?: string;
  value?: any;
  name?: string;
  onChange?: any;
  type?: "text" | "password" | "email";
  onKeyDown?: any;
  register?: any;
};

export const Input = ({
  onChange,
  value,
  name,
  type,
  placeholder,
  children,
  frontChildren,
  className,
  divClassName,
  onKeyDown,
  register,
}: Props) => {
  return (
    <div className={`${divClassName}`}>
      {frontChildren}
      <input
        name={name}
        className={` bg-secondary6 text-secondary2 outline-none placeholder:text-secondary3 dark:bg-dark3 dark:text-background2 dark:placeholder:text-secondary3 md:dark:bg-dark2 ${className}`}
        placeholder={placeholder || "Type here"}
        value={value}
        onChange={onChange}
        type={type}
        onKeyDown={onKeyDown}
        {...(register ? register(name) : {})}
      />
      {children}
    </div>
  );
};
