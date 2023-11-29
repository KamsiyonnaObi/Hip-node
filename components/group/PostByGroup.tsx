import { getPostsByGroupId } from "@/utils/actions/post.action";

import { Post } from "@/components/group";

const PostByGroup = async ({ groupId }: { groupId: string }) => {
  const posts = await getPostsByGroupId(groupId);
  return (
    <div className="gap-5">
      {posts?.map((post) => (
        <Post
          key={post._id}
          postImage={post.image}
          title={post.title}
          tags={[post.tags]}
          avatar={post.userId.profileImage}
          username={post.userId.username}
          createdAt={post.createdAt}
          views={post.views.length}
          likes={post.likes.length}
          comments={post.comments.length}
        />
      ))}
    </div>
  );
};

export default PostByGroup;
