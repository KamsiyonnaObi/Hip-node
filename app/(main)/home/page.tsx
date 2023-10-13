import CreatePost from "@/components/home/CreatePost";
import Meetups from "@/components/home/Meetups";
import PinnedGroup from "@/components/home/PinnedGroup";
import PopularTags from "@/components/home/PopularTags";
import Post from "@/components/home/Post";
import Sidebar from "@/components/home/Sidebar";
import Podcasts from "@/components/Podcasts";
import React from "react";

const Page = () => {
  return (
    <main className="page-formatting">
      <section className="flex flex-col md:gap-5">
        <div className="flex md:hidden medium:flex">
          <Sidebar />
        </div>
        <div className="hidden medium:flex">
          <PopularTags />
        </div>
        <div className="hidden medium:flex">
          <PinnedGroup />
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <CreatePost />
        <Post
          postImage="/PostImage.png"
          title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
          tags={["remote", "part time", "test"]}
          avatar="/Avatar.png"
          name={"John Smith"}
          createdAt={"2 month ago"}
          views={420}
          likes={69}
          comments={75}
        />
        <Post
          postImage="/PostImage.png"
          title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
          tags={["remote", "part time", "test"]}
          avatar="/Avatar.png"
          name={"Louis Liu"}
          createdAt={"2 month ago"}
          views={420}
          likes={69}
          comments={75}
        />
        <Post
          postImage="/PostImage.png"
          title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
          tags={["remote", "part time", "test"]}
          avatar="/Avatar.png"
          name={"Louis Liu"}
          createdAt={"2 month ago"}
          views={420}
          likes={69}
          comments={75}
        />
        <Post
          postImage="/PostImage.png"
          title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
          tags={["remote", "part time", "test"]}
          avatar="/Avatar.png"
          name={"Louis Liu"}
          createdAt={"2 month ago"}
          views={420}
          likes={69}
          comments={75}
        />
        <Post
          postImage="/PostImage.png"
          title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
          tags={["remote", "part time", "test"]}
          avatar="/Avatar.png"
          name={"Louis Liu"}
          createdAt={"2 month ago"}
          views={420}
          likes={69}
          comments={75}
        />
      </section>
      <section className="flex flex-col gap-5">
        <Meetups />
        <Podcasts />
      </section>
    </main>
  );
};

export default Page;
