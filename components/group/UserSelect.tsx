"use client";

import { ChangeEvent, useEffect, useState, useRef } from "react";

import useDebounce from "./GetUser";
import { getUsersBySimilarName } from "@/utils/actions/group.action";
interface User {
  _id: string;
  username: string;
}
export default function UserSelect({
  setter,
  formKey,
}: {
  setter: any;
  formKey: any;
}) {
  const [userSearch, setUserSearch] = useState<string>("");
  const [showList, setShowList] = useState(false);
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

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
      setSuggestedUsers(response);
    };
    fetchUsers();
  }, [debouncedUserSearch]);

  const addUser = (e: any) => {
    const { username, key } = e.target.dataset;
    const user = { username, _id: key };
    const newUsers = selectedUsers.filter((user) => user._id !== key);
    newUsers.push(user);
    setSelectedUsers(newUsers);
  };

  const removeUser = (e: any) => {
    const { key } = e.target.dataset;
    const newUsers = selectedUsers.filter((user) => user._id !== key);
    setSelectedUsers(newUsers);
  };
  return (
    <div onFocus={() => setShowList(true)} ref={divRef}>
      <input
        type="text"
        name="admins"
        placeholder="Add admins..."
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          setUserSearch(e.target.value);
        }}
        className={`border-background2 dark:border-dark4 flex w-full min-w-[18.4375rem] max-w-[52.5rem] items-center rounded-[.5rem] border-[2px] px-[1.25rem] py-[.75rem] caption-regular text-secondary3 dark:bg-dark3`}
      />
      {showList && (
        <div className="caption-regular mb-[.62rem] flex gap-[.62rem]">
          {suggestedUsers.map((user: User) => (
            <div
              key={user._id}
              data-key={user._id}
              data-username={user.username}
              onClick={addUser}
              className="border w-fit"
            >
              {user.username}
            </div>
          ))}
        </div>
      )}
      <div className="caption-regular mb-[.62rem] flex gap-[.62rem]">
        {selectedUsers.map((user: User) => (
          <div key={user._id} className="border w-fit flex gap-2">
            {user.username}
            <div data-key={user._id} onClick={removeUser}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
