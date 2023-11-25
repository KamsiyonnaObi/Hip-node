import CreatePost from "@/components/home/CreatePost";
import Meetups from "@/components/home/Meetups";
import PinnedGroup from "@/components/home/PinnedGroup";
import PopularTags from "@/components/home/PopularTags";
import Post from "@/components/home/Post";
import Sidebar from "@/components/home/Sidebar";
import Podcasts from "@/components/Podcasts";
import { getAllPosts } from "@/utils/actions/post.action";
import { getCurrentUser } from "@/utils/actions/user.action";

export default async function Home() {
  const result = await getAllPosts({});
  const currentUser = await getCurrentUser();
  return (
    <main className="page-formatting">
      <section className="flex flex-col md:gap-5">
        <div className="flex md:hidden lg:flex">
          <Sidebar />
        </div>
        <div className="hidden lg:flex">
          <PopularTags />
        </div>
        <div className="hidden lg:flex">
          <PinnedGroup />
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <div className="hidden md:flex lg:hidden">
          <Sidebar small />
        </div>
        <CreatePost />
        {result.posts.length > 0
          ? result.posts.map((post) => (
              <Post
                key={post._id}
                _id={post._id.toString()}
                currentUserId={currentUser?._id.toString()}
                postImage={post.image}
                title={post.title}
                tags={post.tags}
                avatar={post.avatar}
                username={post.userId?.username || "unknown"}
                createdAt={post.createdAt}
                views={post?.views?.length}
                likes={post?.likes?.length}
                hasLiked={post?.likes?.includes(currentUser?._id) || false}
                comments={post?.comments?.length}
              />
            ))
          : "No Posts to Show!"}
      </section>
      <section className="flex flex-col gap-5">
        <Meetups />
        <Podcasts />
      </section>
    </main>
  );
}
