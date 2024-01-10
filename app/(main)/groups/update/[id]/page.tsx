import ChangeGroup from "@/components/group/ChangeGroup";
import GroupError from "@/components/group/GroupError";
import { getGroupById } from "@/utils/actions/group.action";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Group | Hipnode",
  description:
    "Update your Hipnode group to make it more appealing to other users",
};

const page = async ({ params }: { params: { id: string } }) => {
  const group = await getGroupById(params.id);

  if (!group.success)
    return (
      <div className="flex justify-center">
        <GroupError />
      </div>
    );
  const {
    title,
    coverUrl,
    groupUrl,
    description,
    admins,
    members,
    _id: groupId,
  } = group.data;

  return (
    <main className="flex justify-center">
      <ChangeGroup
        title={title}
        description={description}
        admins={JSON.stringify(admins)}
        members={JSON.stringify(members)}
        coverUrl={coverUrl}
        groupUrl={groupUrl}
        groupId={JSON.stringify(groupId)}
      />
    </main>
  );
};

export default page;
