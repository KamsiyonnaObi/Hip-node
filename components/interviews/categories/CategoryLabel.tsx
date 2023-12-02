"use client";

import { Checkbox } from "@/components/ui/CheckBox";
import { cn } from "@/utils";

const CategoryLabel = ({
  pending,
  category,
  onChange,
}: {
  pending: boolean;
  category: string;
  onChange: any;
}) => {
  return (
    <li className={cn("flex flex-row-reverse items-center justify-between")}>
      <Checkbox
        disabled={pending}
        id={category}
        onCheckedChange={(checked) => onChange(checked, category)}
      />
      <label
        htmlFor={category.toLocaleLowerCase()}
        className="text-xs font-semibold capitalize text-secondary3 peer-aria-[checked=true]:text-black peer-aria-[checked=true]:dark:text-white"
      >
        {category}
      </label>
    </li>
  );
};

export default CategoryLabel;
