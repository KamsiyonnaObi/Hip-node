import { getPostById, getPostsByUserId } from "@/utils/actions/post.action";
import {
  ActionBar,
  GroupPostDate,
  MyProfile,
  MoreFrom,
  OpenedPost,
  PostDate,
  Thread,
  OtherProfile,
} from "@/components";
import { getCurrentUser } from "@/utils/actions/user.action";
import { countComments, hasUserReply } from "@/utils";

const Page = async ({ params }: { params: { slug: string } }) => {
  const currentUser = await getCurrentUser();

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

  const getMorePosts = await getPostsByUserId(userId?._id, postopen.data._id);
  const morePosts = getMorePosts.data;
  const numComments = countComments(comments);
  const hasCommented = hasUserReply({
    comments,
    userId: JSON.stringify(currentUser?._id),
  });

  return (
    <article className="flex min-h-screen flex-col gap-5 bg-background2 p-5 dark:bg-dark2 md:flex-row md:px-10">
      <section className="w-full md:order-2">
        <OpenedPost
          image={image}
          title={title}
          tags={tags}
          content={content}
          postId={params.slug}
          currentUserImage={currentUser?.profileImage || ""}
        />
        <div className="my-5 flex flex-col gap-5 md:hidden">
          <ActionBar
            postId={JSON.stringify(_id)}
            userId={JSON.stringify(currentUser?._id)}
            hasLiked={likes?.includes(currentUser?._id)}
            hasCommented={hasCommented}
            hasShared={shares?.includes(currentUser?._id)}
            hasReported={reports?.includes(currentUser?._id)}
            likes={likes?.length}
            comments={numComments}
            shares={shares?.length}
          />
          {groupId && (
            <GroupPostDate
              username={userId.username}
              createdAt={createdAt}
              groupTitle={groupId?.title}
            />
          )}
          {!groupId && userId?._id.equals(currentUser?._id) && (
            <PostDate username={userId.username} createdAt={createdAt} />
          )}
        </div>
        {comments && (
          <Thread
            currentUserId={JSON.stringify(currentUser?._id)}
            currentUserImage={currentUser?.profileImage || ""}
            postId={params.slug}
            comments={comments}
          />
        )}
      </section>
      <div className="hidden flex-col gap-5 md:order-1 md:flex md:min-w-[210px]">
        <ActionBar
          postId={JSON.stringify(_id)}
          userId={JSON.stringify(currentUser?._id)}
          hasLiked={likes?.includes(currentUser?._id)}
          hasCommented={hasCommented}
          hasShared={shares?.includes(currentUser?._id)}
          hasReported={reports?.includes(currentUser?._id)}
          likes={likes?.length}
          comments={numComments}
          shares={shares?.length}
        />
        {groupId && (
          <GroupPostDate
            username={userId.username}
            createdAt={createdAt}
            groupTitle={groupId.title}
          />
        )}
        {!groupId && userId?._id.equals(currentUser?._id) && (
          <PostDate username={userId.username} createdAt={createdAt} />
        )}
      </div>
      <div className="flex flex-col gap-5 md:order-3 md:min-w-[325px]">
        {userId?._id &&
          currentUser?._id &&
          (userId?._id.equals(currentUser?._id) ? (
            <MyProfile
              user={JSON.stringify(userId)}
              joinedDate={userId.createdAt}
            />
          ) : (
            <OtherProfile
              user={JSON.stringify(userId)}
              joinedDate={userId.createdAt}
              currentUserId={JSON.stringify(currentUser?._id)}
              hasFollowed={userId.followers?.includes(currentUser?._id)}
            />
          ))}{" "}
        {userId?._id && morePosts && (
          <MoreFrom
            posts={JSON.stringify(morePosts)}
            author={userId?.username}
          />
        )}
      </div>
    </article>
  );
};

export default Page;
