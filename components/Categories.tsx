"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import OutlineIcon from "@/components/icons/OutlineIcon";

interface Props {
  title: string;
  categoryList: { [key: string]: boolean };
  web: string;
  filter: string;
}

const Categories = ({ title, categoryList, web, filter }: Props) => {
  const [categories, setCategories] = useState(categoryList);
  const router = useRouter();

  const toggleCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const name = e.currentTarget.id;
    setCategories((prevCategories) => ({
      ...prevCategories,
      [name]: !prevCategories[name],
    }));
  };

  useEffect(() => {
    const selectedCategories = Object.entries(categories)
      .filter(([, checked]) => checked)
      .map(([category]) => category);
    const route =
      selectedCategories.length > 0
        ? `/${web}?${filter}=${selectedCategories.join(",")}`
        : `/${web}`;
    router.push(route);
  }, [categories, router, filter, web]);

  const CheckBox = ({ checked, name }: { checked: boolean; name: string }) => (
    <div
      onClick={toggleCategory}
      id={name}
      className="mt-[10px] flex select-none flex-row justify-between md:w-[170px]"
    >
      <p className={`caption-semibold ${checked ? "" : "text-secondary3"}`}>
        {name}
      </p>

      {checked ? (
        <OutlineIcon.Checkmark className="fill-none stroke-background" />
      ) : (
        <OutlineIcon.Uncheck className="fill-none" />
      )}
    </div>
  );

  return (
    <article className="rounded-[16px] bg-background dark:bg-dark3 md:w-[210px] md:gap-[10px] md:p-[20px]">
      <div className="w-[331px] gap-[20px] p-[20px] dark:text-background md:gap-[12px] md:p-0">
        <div className="flex flex-row justify-between">
          <h3 className="h3-semibold ">{title}</h3>
          <OutlineIcon.DownArrow className="mr-[2px] fill-secondary6 dark:fill-secondary3" />
        </div>
        {Object.entries(categories).map(([category, checked], index) => (
          <CheckBox key={index} checked={checked} name={category} />
        ))}
      </div>
    </article>
  );
};

export default Categories;
