import Categories from "@/components/Categories";
import CreatePost from "@/components/home/CreatePost";
import Meetups from "@/components/home/Meetups";
import PinnedGroup from "@/components/home/PinnedGroup";
import PopularTags from "@/components/home/PopularTags";
import Post from "@/components/home/Post";
import Sidebar from "@/components/home/Sidebar";
import HostCard from "@/components/Meetups/HostCard";
import Podcasts from "@/components/Podcasts";
import { getAllPosts } from "@/utils/actions/post.action";
import React from "react";

export default async function Meetup() {
  const result = await getAllPosts({});
  console.log(result);
  return (
    <main className="page-formatting">
      <section className="flex flex-col md:gap-5">
        <Categories
          title="Categories"
          categoryList={[
            { name: "Full Time", checked: false },
            { name: "Part Time", checked: false },
            { name: "Internship", checked: false },
            { name: "Remote", checked: false },
            { name: "Contract", checked: false },
            { name: "Free", checked: false },
          ]}
        />
      </section>
      <section className="flex flex-col gap-5">
        {result.posts.length > 0
          ? result.posts.map((post) => (
              <Post
                key={post._id}
                _id={post._id}
                postImage={post.postImage}
                title={post.title}
                tags={post.tags}
                avatar={post.avatar}
                username={post.userId?.username || "unknown"}
                createdAt={post.createdAt}
                views={post.views}
                likes={post.likes}
                comments={post.comments}
              />
            ))
          : "No Posts to Show!"}
      </section>
      <section className="flex flex-col gap-5">
        <HostCard
          title="Host a Meetup"
          desc="Find other Hipnoders in your area so you can learn, share, and work together."
          buttonText="Host a Meetup"
        />
        <Podcasts />
      </section>
    </main>
  );
}
