"use client";
import React, { useState } from "react";
import OutlineIcon from "@/components/icons/OutlineIcon";

interface Props {
  title: string;
  categoryList: { name: string; checked: boolean }[];
}

const Categories = ({ title, categoryList }: Props) => {
  const [categories, setCategories] = useState(categoryList);

  const toggleCategory = (index: number) => {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) =>
        i === index ? { ...category, checked: !category.checked } : category
      )
    );
  };

  return (
    <article className="rounded-[16px] bg-background dark:bg-dark3 md:w-[210px] md:gap-[10px] md:p-[20px]">
      <div className="w-[331px] gap-[20px] p-[20px] dark:text-background md:gap-[12px] md:p-0">
        <div className="flex flex-row justify-between">
          <h3 className="h3-semibold ">{title}</h3>
          <OutlineIcon.DownArrow className="mr-[2px] fill-secondary6 dark:fill-secondary3" />
        </div>
        {categories.map((category, index) => (
          <div
            key={index}
            className="mt-[10px] flex select-none flex-row justify-between md:w-[170px]"
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
              <OutlineIcon.Checkmark className="fill-none stroke-background" />
            </div>

            <div
              onClick={() => toggleCategory(index)}
              className={`${category.checked ? "hidden" : ""}`}
            >
              <OutlineIcon.Uncheck className="fill-none" />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Categories;
