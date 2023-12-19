"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/Collapsible";

import { CategoryLabel } from ".";
import OutlineIcon from "@/components/icons/OutlineIcon";
import { cn } from "@/utils";

const InterviewCategory = ({
  categories,
  search,
  query,
}: {
  categories: string[];
  search: Promise<any>;
  query: string;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [checkedState, setCheckedState] = useState(
    Object.assign({}, ...categories.map((key) => ({ [key]: false })))
  );

  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(true);
    search.then(
      () => setPending(false),
      () => setPending(false)
    );
  }, [search]);

  const handleOnChange = (value: boolean, category: string) => {
    setCheckedState((prevState: object) => ({
      ...prevState,
      [category]: value,
    }));

    const newObj = { ...checkedState, [category]: value };

    const filtered = Object.keys(newObj).filter((k) => newObj[k]);

    const searchParams = filtered.length > 0 ? `?tags=${filtered}` : "?";

    router.push("interview" + searchParams + (query ? `&search=${query}` : ""));
  };

  return (
    <div className="w-full rounded-2xl bg-bkg-2 p-5 text-defaultText shadow-lg md:w-52">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex flex-col gap-3"
      >
        <div className="flex justify-between">
          <p className="h3-semibold flex">Categories</p>
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
                pending={pending}
                key={category.toLocaleLowerCase()}
                category={category}
                onChange={handleOnChange}
              />
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default InterviewCategory;
