"use client";

import { useState } from "react";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/Collapsible";

import { CategoryLabel } from ".";
import OutlineIcon from "@/components/icons/OutlineIcon";
import { cn } from "@/utils";

const InterviewCategory = ({ categories }: { categories: string[] }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full rounded-2xl bg-bkg-2 p-5 text-defaultText md:w-52">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex flex-col gap-3"
      >
        <div className="flex justify-between">
          <h3 className="h3-semibold flex">Categories</h3>
          <CollapsibleTrigger>
            <OutlineIcon.DownArrow
              className={cn(
                "fill-transparent stroke-secondary3 dark:stroke-white h-3 w-5 md:hidden",
                isOpen ? "rotate-0" : "-rotate-90"
              )}
            />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <ul className="flex flex-col gap-3">
            {categories.map((category) => (
              <CategoryLabel
                key={category.toLocaleLowerCase()}
                category={category}
              />
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default InterviewCategory;
