"use client";

import React, { useEffect, useState } from "react";
import OutlineIcon from "../icons/OutlineIcon";
import { findAllGroups } from "@/utils/actions/group.action";

interface Group {
  title: string;
  _id: string;
}

const GroupCategory = ({ form }: any) => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGroups() {
      try {
        const groups = await findAllGroups();
        const parsedGroups = JSON.parse(groups);
        setGroups(parsedGroups);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    }

    fetchGroups();
  }, []);

  const SingleSelector = ({
    selectedGroup,
    name,
    onSelect,
    id,
  }: {
    selectedGroup: string | null;
    name: string;
    id: string;
    onSelect: (name: string) => void;
  }) => (
    <div
      onClick={() => onSelect(id)}
      id={name}
      className={`mt-[10px] flex w-[170px] select-none flex-row justify-between ${
        selectedGroup === id ? "rounded-[8px underline" : ""
      }`}
    >
      <p
        className={`caption-semibold ${
          selectedGroup === id ? "" : "text-secondary3"
        }`}
      >
        {name}
      </p>

      {selectedGroup === id ? (
        <OutlineIcon.Checkmark className="fill-none" />
      ) : (
        <OutlineIcon.Uncheck className="fill-none" />
      )}
    </div>
  );

  function handleGroupSelection(name: string): void {
    form.setValue("groupId", name);

    setSelectedGroup(name);
    localStorage.setItem("selectedGroup", name);
  }

  useEffect(() => {
    const storedGroup = localStorage.getItem("selectedGroup");
    if (storedGroup) {
      setSelectedGroup(storedGroup);
    }
  }, []);

  return (
    <article className="w-[210px] rounded-[16px] border border-dark1 bg-background dark:border-background2 dark:bg-dark3 md:gap-[10px] md:p-[20px]">
      <div className="w-[331px] gap-[20px] p-[20px] dark:text-background md:gap-[12px] md:p-0">
        <div className="flex flex-row justify-between">
          <h3 className="h3-semibold ">Group List</h3>
        </div>
        {groups.map((group: Group) => (
          <SingleSelector
            key={JSON.stringify(group._id)}
            selectedGroup={selectedGroup}
            id={group._id}
            name={group.title}
            onSelect={handleGroupSelection}
          />
        ))}
      </div>
    </article>
  );
};

export default GroupCategory;
