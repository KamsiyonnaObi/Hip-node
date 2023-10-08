"use client";
import React, { useState } from "react";
import OutlineIcon from "../icons/OutlineIcon";

const Categories = () => {
  const initialCategories = [
    { name: "Full Time", checked: false },
    { name: "Part Time", checked: false },
    { name: "Internship", checked: false },
    { name: "Remote", checked: false },
    { name: "Contract", checked: false },
    { name: "Free", checked: false },
  ];

  const [categories, setCategories] = useState(initialCategories);

  const toggleCategory = (index: any) => {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) =>
        i === index ? { ...category, checked: !category.checked } : category
      )
    );
  };

  return (
    <article className="rounded-[16px] bg-background dark:bg-dark3 md:w-[210px] md:gap-[10px] md:p-[20px]">
      <div className="w-[331px] gap-[20px] p-[20px] dark:text-background md:gap-[12px] md:p-0">
        <div className="flex flex-row gap-[193px]">
          <h3 className="h3-semibold ">Categories</h3>
          <OutlineIcon.DownArrow className="fill-secondary6 dark:fill-secondary3 md:hidden" />
        </div>
        {categories.map((category, index) => (
          <div
            key={index}
            className="mt-[12px] flex flex-row justify-between md:w-[170px]"
          >
            <p
              className={`caption-semibold ${
                category.checked ? "" : "text-secondary3"
              }`}
            >
              {category.name}
            </p>
            <div
              onClick={() => toggleCategory(index)}
              className={`${category.checked ? "" : "hidden"}`}
            >
              <OutlineIcon.Checkmark className="fill-background" />
            </div>

            <div
              onClick={() => toggleCategory(index)}
              className={`${category.checked ? "hidden" : ""}`}
            >
              <OutlineIcon.Uncheck className="fill-background" />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Categories;
