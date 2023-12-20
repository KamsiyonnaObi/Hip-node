"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import OutlineIcon from "@/components/icons/OutlineIcon";

interface Props {
  title: string;
  categoryList: { [key: string]: boolean };
  web: string;
  filter: string;
  searchFilter: string;
}

const Categories = ({
  title,
  categoryList,
  web,
  filter,
  searchFilter,
}: Props) => {
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

    const searchParams =
      selectedCategories.length > 0
        ? `?${filter}=${selectedCategories.join(",")}`
        : "?";
    const route =
      web + searchParams + (searchFilter ? `&search=${searchFilter}` : "");

    router.push(route);
  }, [categories, router, filter, web, searchFilter]);

  const CheckBox = ({ checked, name }: { checked: boolean; name: string }) => (
    <div
      onClick={toggleCategory}
      id={name}
      className="mt-3 flex select-none flex-row justify-between md:w-[170px]"
    >
      <p className={`caption-semibold ${checked ? "" : "text-secondary3"}`}>
        {name}
      </p>

      {checked ? (
        <OutlineIcon.Checkmark className="cursor-pointer fill-none stroke-background" />
      ) : (
        <OutlineIcon.Uncheck className="cursor-pointer fill-none " />
      )}
    </div>
  );

  return (
    <article className="gap-5 rounded-[16px] bg-background p-5 shadow-lg dark:bg-dark3 dark:text-background md:max-w-[210px] md:gap-3">
      <div className="flex flex-row justify-between">
        <h3 className="h3-semibold ">{title}</h3>
        <OutlineIcon.DownArrow className="mr-[2px] cursor-pointer fill-secondary6 dark:fill-secondary3" />
      </div>
      {Object.entries(categories).map(([category, checked], index) => (
        <CheckBox key={index} checked={checked} name={category} />
      ))}
    </article>
  );
};

export default Categories;
