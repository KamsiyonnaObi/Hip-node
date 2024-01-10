import React from "react";
import { getPostsByUserId } from "@/utils/actions/post.action";
import { PostHome } from "@/components/home";
import { Button } from "../ui/Button";
import Link from "next/link";

type Props = { JSONUser: string };
const RenderProfilePosts = async ({ JSONUser }: Props) => {
  const userData = JSON.parse(JSONUser);
  const { userId, username, profileImage } = userData;

  const userPosts = await getPostsByUserId(userId!);

  return (
    <div className="flex flex-col gap-5">
      {userPosts?.data!.length > 0 ? (
        userPosts?.data!.map((post) => (
          <PostHome
            key={post._id}
            _id={post._id.toString()}
            currentUserId={userId}
            postImage={post.image}
            title={post.title}
            tags={post.tags}
            avatar={profileImage}
            username={username}
            createdAt={post.createdAt}
            views={post?.views?.length}
            likes={post?.likes?.length}
            hasLiked={post?.likes?.includes(userId) || false}
            comments={post?.comments?.length}
            showEdit={post.userId?._id.toString() === userId}
            postUser={post.userId?._id.toString() || null}
          />
        ))
      ) : (
        <>
          <section className="flex flex-row items-center justify-between gap-[10px] rounded-[16px] bg-background p-[14px] dark:bg-dark3 md:gap-[20px] md:p-[20px]">
            <p className="md:h3-regular caption-regular">
              Create your first Post!
            </p>
            <div className="flex flex-row ">
              <Link href={`/posts/new`}>
                <Button
                  color="orange"
                  className="caption-semibold md:body-semibold gap-2.5 rounded-[6px] px-3 py-2 text-center md:px-4 md:py-3"
                >
                  Create Post
                </Button>
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default RenderProfilePosts;
