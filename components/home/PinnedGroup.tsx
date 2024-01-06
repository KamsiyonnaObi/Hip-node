import React from "react";
import OutlineIcon from "../icons/OutlineIcon";
import { getAllPinnedGroups } from "@/utils/actions/user.action";
import PinnedGroups from "./PinnedGroups";
import Link from "next/link";

const PinnedGroup = async () => {
  const getPinnedGroups = await getAllPinnedGroups();

  return (
    <div className="flex w-[210px] flex-col gap-[10px] rounded-[16px] bg-background p-[20px] shadow-lg dark:bg-dark3">
      <div className="flex flex-col">
        <section className="display-semibold mb-1 flex flex-row items-center gap-2 dark:text-background2">
          <p>Pinned Group</p>
          <OutlineIcon.ArrowLeft className=" stroke-secondary3 dark:stroke-background2" />
        </section>
        <div className="flex flex-col gap-[10px] rounded-[16px] dark:bg-dark3">
          {getPinnedGroups.slice(0 - 6).map((group) => (
            <div key={group.id}>
              <Link href={`/groups/${group._id}`}>
                <PinnedGroups
                  title={group.title}
                  groupUrl={group.groupUrl}
                  description={group.description}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PinnedGroup;
