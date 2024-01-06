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
import { reportReasons } from "@/lib/constants";
import { IComments } from "@/models/post.model";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // grab which post id
  const postId = params.slug;

  // grab the post
  const post = await getPostById(postId);

  return {
    title: post.data.title,
    keywords: post.data.tags,
    description: post.data.content,
    openGraph: {
      images: [
        {
          url: post.data.image,
          width: 1200,
          height: 630,
          alt: "Hipnode",
        },
      ],
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const currentUser = await getCurrentUser();

  const postopen = await getPostById(params.slug);

  if (!postopen.success) return <div>Post Not Found</div>;
  const {
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

  const hasUserCommented = ({
    comments,
    currentUserId,
  }: {
    comments: IComments[];
    currentUserId?: string;
  }) => {
    if (!comments) {
      return false;
    }

    for (const comment of comments) {
      if (comment?.userId?.toString() === currentUserId) {
        return true;
      }
    }

    return false;
  };

  const hasCommented = hasUserCommented({
    comments,
    currentUserId: currentUser?._id.toString(),
  });

  const hasReported = reportReasons.some((reason) => {
    return reports.get(reason).includes(currentUser?._id);
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
          userId={userId._id}
        />
        <div className="my-5 flex flex-col gap-5 md:hidden">
          <ActionBar
            postId={params.slug}
            userId={currentUser?._id.toString()}
            hasLiked={likes?.includes(currentUser?._id)}
            hasCommented={hasCommented}
            hasShared={shares?.includes(currentUser?._id)}
            hasReported={hasReported}
            likes={likes?.length}
            comments={comments?.length}
            shares={shares?.length}
            title={title}
            body={content}
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
            currentUserId={currentUser?._id?.toString()}
            currentUserImage={currentUser?.profileImage || ""}
            postId={params.slug}
            comments={comments}
          />
        )}
      </section>
      <div className="hidden flex-col gap-5 md:order-1 md:flex md:min-w-[210px]">
        <ActionBar
          postId={params.slug}
          userId={currentUser?._id.toString()}
          hasLiked={likes?.includes(currentUser?._id)}
          hasCommented={hasCommented}
          hasShared={shares?.includes(currentUser?._id)}
          hasReported={hasReported}
          likes={likes?.length}
          comments={comments?.length}
          shares={shares?.length}
          title={title}
          body={content}
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
              hasFollowed={userId.followers?.includes(currentUser?._id)}
              isFollow={currentUser.following?.includes(userId?._id)}
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
