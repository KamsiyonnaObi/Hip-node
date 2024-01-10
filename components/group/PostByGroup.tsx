import { getPostsByGroupId } from "@/utils/actions/post.action";
import Post from "../home/Post";
import { getCurrentUser } from "@/utils/actions/user.action";

const PostByGroup = async ({ groupId }: { groupId: string }) => {
  const currentUser = await getCurrentUser();
  const userId = currentUser?._id.toString() || "";
  const posts = await getPostsByGroupId(groupId);
  return (
    <div className="flex flex-col gap-5">
      {posts?.map((post) => (
        <Post
          key={post._id}
          postImage={post.image}
          title={post.title}
          tags={post.tags}
          avatar={post.userId.profileImage}
          username={post.userId.username}
          createdAt={post.createdAt}
          views={post.views.length}
          likes={post.likes.length}
          comments={post.comments.length}
          _id={post._id.toString()}
          showEdit={post?.userId?._id.toString() === userId}
          hasLiked={
            post?.likes
              ?.map((likes: { _id: string }) => likes._id.toString())
              .includes(userId.toString()) || false
          }
          currentUserId={userId}
          postUser={post.userId?._id.toString() || null}
        />
      ))}
    </div>
  );
};

export default PostByGroup;
