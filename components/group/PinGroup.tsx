import React, { useState, useEffect, ReactElement } from "react";
import OutlineIcon from "../icons/OutlineIcon";
import {
  getAllPinnedGroups,
  pinAGroup,
  unpinAGroup,
} from "@/utils/actions/user.action";

interface PinGroupProps {
  groupId: string;
  userId: string;
}

const PinGroup = ({ groupId, userId }: PinGroupProps): ReactElement => {
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const fetchPinnedGroups = async () => {
      try {
        const pinnedGroups = await getAllPinnedGroups({ userId });
        const isPinned = pinnedGroups.includes(groupId);
        setIsPinned(isPinned);
      } catch (error) {
        console.error("Error fetching pinned groups", error);
      }
    };
    fetchPinnedGroups();
  }, [groupId, userId]);

  const handlePinClick = async () => {
    try {
      await pinAGroup({ userId, groupId });
      setIsPinned(true);
    } catch (error) {
      console.error("Failed to pin the group", error);
    }
  };

  const handleUnpinClick = async () => {
    try {
      await unpinAGroup({ userId, groupId });
      setIsPinned(false);
    } catch (error) {
      console.error("Failed to unpin the group", error);
    }
  };

  return (
    <div>
      {isPinned ? (
        // Show unpin icon if the group is already pinned
        <div onClick={handleUnpinClick}>
          <OutlineIcon.Pin className="w-[.75rem ml-[.125rem] h-[.75rem] cursor-pointer fill-green" />
        </div>
      ) : (
        // Show pin icon if the group is not pinned
        <div onClick={handlePinClick}>
          <OutlineIcon.Pin className="ml-[.125rem] h-[.75rem] w-[.75rem] cursor-pointer fill-red" />
        </div>
      )}
    </div>
  );
};

export default PinGroup;
