import React, { useState, useEffect } from "react";
import OutlineIcon from "../icons/OutlineIcon";
import Link from "next/link";
import { deleteGroup, getGroupById } from "@/utils/actions/group.action";
import router from "next/router";

interface GroupMenuProps {
  params: { slug: string };
}

const GroupMenu: React.FC<GroupMenuProps> = ({ params }) => {
  const [group, setGroup] = useState<GroupData | null>(null);
  const [deleteStatus, setDeleteStatus] = useState<DeleteGroupResult | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const groupData = await getGroupById(params.slug);
        setGroup(groupData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [params.slug]);

  const handleDeleteClick = async (groupId: number) => {
    try {
      const result = await deleteGroup(groupId);
      setDeleteStatus(result);

      if (result && result.success) {
        router.push("/groups");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-[10.625rem] p-[1.25rem] h-[5.675rem] rounded-[0.625rem] border border-secondary5 bg-background2 dark:bg-dark4 dark:border-secondary2 gap-[.62rem]">
      <Link href="/groups/update">
        <div className="flex items-center gap-[0.625rem]">
          <OutlineIcon.Edit className="dark:fill-white" />
          <p className="text-secondary2 body-semibold dark:text-background2">
            Edit Group Info
          </p>
        </div>
      </Link>
      <div>
        <button onClick={() => handleDeleteClick(group.id)}>
          <div className="flex items-center gap-[0.625rem]">
            <OutlineIcon.Trash className="fill-transparent" />
            <p className="text-secondary2 body-semibold dark:text-background2">
              Delete Group
            </p>
          </div>
        </button>

        {deleteStatus && (
          <div>
            {deleteStatus.success ? (
              <p>Group deleted successfully: {deleteStatus.message}</p>
            ) : (
              <p>Error: {deleteStatus.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupMenu;
