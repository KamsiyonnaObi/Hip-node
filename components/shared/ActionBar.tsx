import React from "react";
import clsx from "clsx";

import { ActionBarLink } from "@/types/component";
import { actionBarLinks } from "@/constants";

const ActionBar = () => {
  return (
    <section className="flex w-full flex-col items-start justify-start gap-5 rounded-2xl bg-background p-5 dark:bg-dark3">
      {actionBarLinks.map((a: ActionBarLink) => {
        return (
          <button key={a.label} className="flex gap-[14px] rounded-md">
            <div
              className={clsx("h-7 w-7 rounded-md p-1", {
                "bg-red10": a.status,
                "bg-background2 dark:bg-dark4": !a.status,
              })}
            >
              <a.icon
                className={clsx({
                  "fill-red80": a.status,
                  "fill-secondary3": !a.status,
                })}
              />
            </div>
            <div
              className={clsx("flex gap-1", {
                "text-secondary2 dark:text-background": a.status,
                "text-secondary3": !a.status,
              })}
            >
              {a.value && <p>{new Intl.NumberFormat().format(a.value)} </p>}
              <p>{a.label}</p>
            </div>
          </button>
        );
      })}
    </section>
  );
};

export default ActionBar;
