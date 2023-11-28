"use client";
import { useEffect, useState } from "react";
import { getPostByGroupId } from "@/utils/actions/post.action";
import { Post } from "@/components/group";

interface PostData {
  _id: string;
  postImage: string;
  title: string;
  tags: string[];
  avatar: string;
  username: string;
  createdAt: string;
  views: number;
  likes: number;
  comments: number;
}

function PostByGroup() {
  const [dynamicGroupId, setDynamicGroupId] = useState<string | null>(null);
  const [posts, setPosts] = useState<PostData[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const pathSegments = url.pathname.split("/");

      const groupId = pathSegments.filter((segment) => segment !== "").pop();

      if (groupId !== dynamicGroupId) {
        setDynamicGroupId(groupId || null);
      }
    }
  }, [dynamicGroupId]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (dynamicGroupId) {
        const result = await getPostByGroupId(dynamicGroupId);

        if (result.success) {
          setPosts(result.data);
        } else {
          console.error("Error:", result.message);
        }
      }
    };

    fetchPosts();
  }, [dynamicGroupId]);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post._id}
          postImage={""}
          title={post.title}
          tags={[]}
          avatar={""}
          username={""}
          createdAt={""}
          views={0}
          likes={0}
          comments={0}
        />
      ))}
    </div>
  );
}

export default PostByGroup;
