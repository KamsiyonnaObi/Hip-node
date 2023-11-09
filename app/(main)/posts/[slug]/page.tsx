import { commentData } from "@/constants/dummy";
import { getPostById, getPostsByUserId } from "@/utils/actions/post.action";
import {
  ActionBar,
  GroupPostDate,
  MyProfile,
  MoreFrom,
  OpenedPost,
  PostDate,
  Thread,
  FollowedProfile,
  OtherProfile,
} from "@/components";
import { getCurrentUserId } from "@/utils/actions/user.action";

const Page = async ({ params }: { params: { slug: string } }) => {
  const currentUserId = await getCurrentUserId();

  const postopen = await getPostById(params.slug);

  if (!postopen.success) return <div>Post Not Found</div>;
  const {
    _id,
    title,
    tags,
    content,
    userId,
    groupId,
    createdAt,
    image,
    likes,
    comments,
    shares,
    reports,
  } = postopen.data;

  const morePosts = await getPostsByUserId(userId._id, postopen.data._id);
  const posts = morePosts.data;

  let profileContent;

  if (userId === currentUserId) {
    profileContent = <MyProfile user={userId} joinedDate={userId.createdAt} />;
  } else if (userId.followers.includes(currentUserId)) {
    profileContent = (
      <FollowedProfile user={userId} joinedDate={userId.createdAt} />
    );
  } else {
    profileContent = (
      <OtherProfile user={userId} joinedDate={userId.createdAt} />
    );
  }

  return (
    <article className="flex min-h-screen flex-col gap-5 bg-background2 p-5 dark:bg-dark2 md:flex-row md:px-10">
      <section className="w-full md:order-2">
        <OpenedPost image={image} title={title} tags={tags} content={content} />
        <div className="my-5 flex flex-col gap-5 md:hidden">
          <ActionBar
            postId={JSON.stringify(_id)}
            userId={JSON.stringify(currentUserId)}
            hasLiked={likes.includes(currentUserId)}
            hasCommented={comments.includes(currentUserId)}
            hasShared={shares.includes(currentUserId)}
            hasReported={reports.includes(currentUserId)}
            likes={likes.length}
            comments={comments.length}
            shares={shares.length}
          />
          {groupId && (
            <GroupPostDate
              username={userId.username}
              createdAt={createdAt}
              groupTitle={groupId.title}
            />
          )}
          {!groupId && userId === currentUserId && (
            <PostDate username={userId.username} createdAt={createdAt} />
          )}
        </div>
        <Thread commentData={commentData} />
      </section>
      <div className="hidden flex-col gap-5 md:order-1 md:flex md:min-w-[210px]">
        <ActionBar
          postId={JSON.stringify(_id)}
          userId={JSON.stringify(currentUserId)}
          hasLiked={likes.includes(currentUserId)}
          hasCommented={comments.includes(currentUserId)}
          hasShared={shares.includes(currentUserId)}
          hasReported={reports.includes(currentUserId)}
          likes={likes.length}
          comments={comments.length}
          shares={shares.length}
        />
        {groupId && (
          <GroupPostDate
            username={userId.username}
            createdAt={createdAt}
            groupTitle={groupId.title}
          />
        )}
        {!groupId && userId === currentUserId && (
          <PostDate username={userId.username} createdAt={createdAt} />
        )}
      </div>
      <div className="flex flex-col gap-5 md:order-3">
        {profileContent}{" "}
        {posts && <MoreFrom posts={posts} author={userId.username} />}
      </div>
    </article>
  );
};

export default Page;
