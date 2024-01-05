"use client";

import { IUser } from "@/types/mongoose";
import { getAllUserByQuery } from "@/utils/actions/user.action";
import { useState, useEffect } from "react";

const SearchResults = ({
  searchQuery,
  onUserClick,
}: {
  searchQuery: string;
  onUserClick: (user: IUser) => void;
}) => {
  const [searchResults, setSearchResults] = useState<IUser[]>([]);

  const handleClick = (user: IUser) => {
    onUserClick(user);
  };

  useEffect(() => {
    const fetchResults = async () => {
      const results = await getAllUserByQuery(searchQuery);
      if (results !== undefined) {
        setSearchResults(JSON.parse(results));
      }
    };
    fetchResults();
  }, [searchQuery]);
  return (
    <div className="flex flex-col gap-2">
      {searchResults.map((user) => (
        <div
          key={user._id.toString()}
          className="flex cursor-pointer flex-col gap-0"
          onClick={() => {
            handleClick(user);
          }}
        >
          <p className="body-bold text-secondary2 dark:text-background">
            {user.fullName}
          </p>
          <p className="body-regular text-secondary4 dark:text-background2">
            @{user.username}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
