"use client";
import { ChangeEvent, useEffect, useState, useRef } from "react";

import useDebounce from "./GetUser";
import { getUsersBySimilarName } from "@/utils/actions/group.action";
import OutlineIcon from "../icons/OutlineIcon";
interface User {
  _id: string;
  username: string;
}

export default function UserSelect({
  setter,
  formKey,
  initialUserArray,
}: {
  setter: any;
  initialUserArray?: User[];
  formKey: string;
}) {
  const [userSearch, setUserSearch] = useState<string>("");
  const [showList, setShowList] = useState(false);
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>(
    initialUserArray || []
  );

  const debouncedUserSearch = useDebounce(userSearch, 300);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const justIds = selectedUsers.map((user) => user._id);
    setter((prevData: any) => ({
      ...prevData,
      [formKey]: justIds,
    }));
  }, [formKey, selectedUsers, setter]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!debouncedUserSearch) {
      setSuggestedUsers([]);
      return;
    }
    const fetchUsers = async () => {
      const response = JSON.parse(
        await getUsersBySimilarName(debouncedUserSearch)
      );
      const selectedUserIds = selectedUsers.map((user) => user._id);

      const filteredArray = response.filter((user: User) => {
        return !selectedUserIds.includes(user._id);
      });
      setSuggestedUsers(filteredArray);
    };
    fetchUsers();
  }, [debouncedUserSearch, selectedUsers]);

  const addUser = (e: any) => {
    const { username, key } = e.target.dataset;
    const user = { username, _id: key };
    console.log(user);
    const newUsers = selectedUsers.filter((user) => user._id !== key);
    console.log(newUsers);
    newUsers.push(user);
    setUserSearch("");
    setSuggestedUsers([]);
    setSelectedUsers(newUsers);
  };

  const removeUser = (e: any) => {
    const { key } = e.currentTarget.dataset;
    const newUsers = selectedUsers.filter((user) => user._id !== key);
    setSelectedUsers(newUsers);
  };

  return (
    <div onFocus={() => setShowList(true)} ref={divRef}>
      <input
        type="text"
        name="admins"
        placeholder={`Add ${formKey}...`}
        value={userSearch}
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          setUserSearch(e.target.value);
        }}
        className={`caption-regular flex w-full min-w-[18.4375rem] max-w-[52.5rem] items-center rounded-[.5rem] border-[2px] border-background2 px-[1.25rem] py-[.75rem] text-secondary3 dark:border-dark4 dark:bg-dark3`}
      />
      {showList && (
        <div className="caption-regular mb-[.62rem] flex flex-wrap gap-[.62rem]">
          {suggestedUsers.slice(0, 5).map((user: User) => {
            return (
              <div
                key={user._id}
                data-key={user._id}
                data-username={user.username}
                onClick={addUser}
                className="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border-none bg-background px-4 py-2 capitalize text-secondary2 hover:bg-background/80 dark:bg-dark4 dark:text-background2 hover:dark:bg-dark4/80"
              >
                {user.username}
              </div>
            );
          })}
        </div>
      )}
      <div className="caption-regular mb-[.62rem] flex flex-wrap gap-[.62rem]">
        {selectedUsers.map((user: User) => (
          <div
            key={user._id}
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md border-none bg-background px-4 py-2 capitalize text-secondary2 hover:bg-background/80 dark:bg-dark4 dark:text-background2 hover:dark:bg-dark4/80"
          >
            {user.username}
            <div
              data-key={user._id}
              onClick={removeUser}
              className="cursor-pointer"
            >
              <OutlineIcon.Close />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
