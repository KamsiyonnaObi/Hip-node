import React from "react";

interface Props {
  className?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ className, placeholder, onChange }: Props) => {
  return (
    <>
      <input
        className={`bg-secondary6 text-secondary4 dark:bg-dark4 ${className}`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
