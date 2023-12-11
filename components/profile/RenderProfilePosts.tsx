import React from "react";
import { getPostsByUserId } from "@/utils/actions/post.action";
import { PostHome } from "@/components/home";

type Props = { userId?: string };
const RenderProfilePosts = async ({ userId }: Props) => {
  const userPosts = await getPostsByUserId(userId!);
  //   console.log("here", userPosts);
  if (!userPosts.data) {
    return <div>error</div>;
  }
  return (
    <div className="flex flex-col gap-5">
      {userPosts?.data.length > 0
        ? userPosts?.data.map((post) => (
            <PostHome
              key={post._id}
              _id={post._id.toString()}
              currentUserId={userId}
              postImage={post.image}
              title={post.title}
              tags={post.tags}
              avatar={post.userId?.profileImage}
              username={post.userId?.username || "unknown"}
              createdAt={post.createdAt}
              views={post?.views?.length}
              likes={post?.likes?.length}
              hasLiked={post?.likes?.includes(userId) || false}
              comments={post?.comments?.length}
              showEdit={post.userId?._id.toString() === userId}
              postUser={post.userId?._id || null}
            />
          ))
        : "No Posts to Show!"}
    </div>
  );
};

export default RenderProfilePosts;
