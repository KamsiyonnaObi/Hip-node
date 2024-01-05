import React, { useState } from "react";
import OutlineIcon from "../icons/OutlineIcon";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    // Call the onSearch callback with the current search query
    onSearch(value);
  };
  return (
    <section className="relative flex h-11 w-full items-center justify-between gap-5 rounded-lg bg-secondary6 p-5 dark:bg-dark4">
      <input
        className="body-regular flex flex-1 resize-none items-center  justify-start bg-secondary6 text-secondary4 placeholder:text-secondary4 focus:outline-none dark:bg-dark4"
        placeholder="Type here to search..."
        value={inputValue}
        onChange={handleChange}
      />

      <button className="flex items-center">
        <OutlineIcon.SearchIcon className="h-5 w-5 stroke-secondary4" />
      </button>
    </section>
  );
};

export default SearchInput;
