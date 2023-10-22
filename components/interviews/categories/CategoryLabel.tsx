"use client";

import { Checkbox } from "@/components/ui/CheckBox";

const CategoryLabel = ({ category }: { category: string }) => {
  return (
    <li className="flex flex-row-reverse items-center justify-between">
      <Checkbox id={category} />
      <label
        htmlFor={category.toLocaleLowerCase()}
        className="text-xs font-semibold capitalize text-secondary3 peer-aria-checked:text-white"
      >
        {category}
      </label>
    </li>
  );
};

export default CategoryLabel;
