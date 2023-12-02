import { getAllPosts } from "@/utils/actions/post.action";
import React from "react";
import Post from "./Post";

const PostRender = async ({
  searchParams,
  currentUserId,
}: {
  searchParams: { search: string };
  currentUserId: string;
}) => {
  const result = await getAllPosts({ ...searchParams });
  return (
    <div className="flex flex-col gap-5">
      {result.posts.length > 0
        ? result.posts.map((post) => (
            <Post
              key={post._id}
              _id={post._id.toString()}
              currentUserId={currentUserId}
              postImage={post.image}
              title={post.title}
              tags={post.tags}
              avatar={post.userId?.profileImage}
              username={post.userId?.username || "unknown"}
              createdAt={post.createdAt}
              views={post?.views?.length}
              likes={post?.likes?.length}
              hasLiked={post?.likes?.includes(currentUserId) || false}
              comments={post?.comments?.length}
              showEdit={post.userId?._id.toString() === currentUserId}
            />
          ))
        : "No Posts to Show!"}
    </div>
  );
};

export default PostRender;
