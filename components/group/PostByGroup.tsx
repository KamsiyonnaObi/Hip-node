"use client";
import { useEffect, useState } from "react";
import { getPostByGroupId } from "@/utils/actions/post.action";
import { Post } from "@/components/group";

function PostByGroup() {
  const [dynamicGroupId, setDynamicGroupId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const pathSegments = url.pathname.split("/");

      const groupId = pathSegments.filter((segment) => segment !== "").pop();

      setDynamicGroupId(groupId || null);
    }
  }, []);

  useEffect(() => {
    if (dynamicGroupId) {
      getPostByGroupId(dynamicGroupId).then((result) => {
        if (result.success) {
          console.log("Posts found:", result.data);
        } else {
          console.error("Error:", result.message);
        }
      });
    }
  }, [dynamicGroupId]);

  return (
    <div>
      <Post
        postImage={""}
        title={""}
        tags={[]}
        avatar={""}
        username={""}
        createdAt={""}
        views={0}
        likes={0}
        comments={0}
      />
    </div>
  );
}

export default PostByGroup;
