import ChangeGroup from "@/components/group/ChangeGroup";
import GroupError from "@/components/group/GroupError";
import { getGroupById } from "@/utils/actions/group.action";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const group = await getGroupById(params.id);

  if (!group.success)
    return (
      <div className="flex justify-center">
        <GroupError />
      </div>
    );
  const { title, coverUrl, groupUrl, description } = group.data;

  return (
    <div className="flex justify-center">
      <ChangeGroup
        title={title}
        description={description}
        admins={[]}
        members={[]}
        coverUrl={coverUrl}
        groupUrl={groupUrl}
      />
    </div>
  );
};

export default page;
