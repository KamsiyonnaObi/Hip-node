import { Podcasts, StartInterview } from "@/components";
import LeftSideBar from "@/components/profile/LeftSideBar";

export default async function Profile() {
  return (
    <section className="">
      {/* Profile Details */}
      <article className="flex flex-col">
        <LeftSideBar />
      </article>
      {/* Start Your Interview */}
      <article className="flex flex-col">
        <StartInterview />
      </article>
      {/* Bar & Posts */}
      <article className="flex flex-col">
        <div>Bar & Posts</div>
      </article>
      {/* Meetups */}
      <article className="flex flex-col">
        <LeftSideBar />
      </article>
      {/* Podcasts */}
      <article className="flex flex-col">
        <Podcasts />
      </article>
    </section>
  );
}
