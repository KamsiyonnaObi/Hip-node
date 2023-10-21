import React from "react";

import {
  About,
  Admin,
  Cover,
  Frame,
  ActiveMembers,
  PopularTags,
  RecentMedia,
  Post,
  CreateGroup,
} from "@/components/group";

const page = () => {
  return (
    <main>
      {/* Desktop */}
      <div className="mx-auto hidden items-center justify-center gap-5 xl:max-w-[1100px] lg:mt-5 lg:flex lg:max-w-[950px] lg:flex-row lg:items-start">
        <section>
          <div className="flex flex-col gap-[1.25rem]">
            <About />
            <Admin />
            <PopularTags />
          </div>
        </section>
        <div className="flex flex-col sm:flex-row sm:gap-[1.25rem]">
          <section>
            <div className="mx-auto flex flex-col flex-wrap gap-5 lg:w-[800px] lg:flex-row">
              <Cover />
              <div className="w-full">
                <Frame />
              </div>
              <Post
                postImage="/PostImage.png"
                title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
                tags={["remote", "part time", "test"]}
                avatar="/Avatar.png"
                username={"John Smith"}
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
                username={"John Smith"}
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
                username={"John Smith"}
                createdAt={"2 month ago"}
                views={420}
                likes={69}
                comments={75}
              />
            </div>
          </section>
          <section>
            <div className="flex flex-col gap-5">
              <CreateGroup
                title={"Create Group"}
                desc={
                  "Create a community and unite with like-minded individuals. Embark on exciting journeys together."
                }
                buttonText={"Create Group"}
              />
              <ActiveMembers avatar={"/Avatar.png"} />
              <RecentMedia media={"/bird.png"} />
            </div>
          </section>
        </div>
      </div>
      {/* Tablet */}
      <div className="mx-auto hidden items-center justify-center gap-5 md:mt-5 md:flex md:max-w-[700px] md:flex-row md:items-start lg:hidden">
        <div className="flex flex-col md:flex-row md:gap-[1.25rem]">
          <section>
            <div className="mx-auto flex flex-col flex-wrap gap-5 lg:w-[800px] lg:flex-row">
              <Cover />
              <div className="w-full">
                <Frame />
              </div>
              <Post
                postImage="/PostImage.png"
                title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
                tags={["remote", "part time", "test"]}
                avatar="/Avatar.png"
                username={"John Smith"}
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
                username={"John Smith"}
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
                username={"John Smith"}
                createdAt={"2 month ago"}
                views={420}
                likes={69}
                comments={75}
              />
            </div>
          </section>
          <div className="flex flex-col">
            <section>
              <div className="flex flex-col gap-5">
                <CreateGroup
                  title={"Create Group"}
                  desc={
                    "Create a community and unite with like-minded individuals. Embark on exciting journeys together."
                  }
                  buttonText={"Create Group"}
                />
                <ActiveMembers avatar={"/Avatar.png"} />
                <RecentMedia media={"/bird.png"} />
              </div>
            </section>
            <section>
              <div className="flex flex-col gap-[1.25rem]">
                <About />
                <Admin />
                <PopularTags />
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="xs:max-w-[320px] mx-auto mt-2.5 flex flex-col items-center justify-center gap-5 sm:max-w-[600px] md:hidden">
        <div className="flex flex-col gap-5 sm:w-[99%]">
          <Cover />
          <CreateGroup
            title={"Create Group"}
            desc={
              "Create a community and unite with like-minded individuals. Embark on exciting journeys together."
            }
            buttonText={"Create Group"}
          />
          <Frame />
          <Post
            postImage="/PostImage.png"
            title="Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women..."
            tags={["remote", "part time", "test"]}
            avatar="/Avatar.png"
            username={"John Smith"}
            createdAt={"2 month ago"}
            views={420}
            likes={69}
            comments={75}
          />
          <ActiveMembers avatar={"/Avatar.png"} />
          <RecentMedia media={"/bird.png"} />
          <About />
          <Admin />
        </div>
      </div>
    </main>
  );
};

export default page;
