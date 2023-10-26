import React, { useState } from "react";

const TagInput: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");

  const handleTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const addTag = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <div className="flex flex-col gap-[.62rem]">
      <label className="text-secondary2 caption-semibold dark:text-background2">
        Add tags
      </label>
      <div>
        <input
          type="text"
          value={tagInput}
          onChange={handleTagInput}
          placeholder="Enter a tag..."
          className="border-background2 dark:border-dark4 flex min-w-[18.4375rem] w-full max-w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3"
        />
        <button
          onClick={addTag}
          className="text-sm-regular dark:text-background2 text-secondary2 pl-[.62rem]"
        >
          Add Tag
        </button>
      </div>
      <div>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-secondary2 caption-semibold dark:text-background2 p-[.62rem] underline border mr-[.62rem]"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="text-sm-regular dark:text-background2 text-secondary2 ml-[.62rem]"
            >
              Remove
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
