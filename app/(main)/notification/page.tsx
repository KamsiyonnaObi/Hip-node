import Meetups from "@/components/home/Meetups";
import PinnedGroup from "@/components/home/PinnedGroup";
import PopularTags from "@/components/home/PopularTags";
import Sidebar from "@/components/home/Sidebar";
import Podcasts from "@/components/Podcasts";
import Notification from "@/components/navbar/Notification";
import { getPopularTags } from "@/utils/actions/post.action";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications | Hipnode",
  description:
    "Get notified when someone interacts with your posts or comments on Hipnode",
  keywords: ["Hipnode", "notifications", "community", "forum", "developers"],
};

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const getPopTags = await getPopularTags();

  return (
    <main className="page-formatting">
      <section className="flex flex-col md:gap-5">
        <div className="flex md:hidden lg:flex">
          <Sidebar />
        </div>
        <div className="hidden lg:flex">
          <PopularTags getPopTags={getPopTags} />
        </div>
        <div className="hidden lg:flex">
          <PinnedGroup />
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <Notification type="page" />
      </section>
      <section className="flex flex-col gap-5">
        <Meetups />
        <Podcasts />
      </section>
    </main>
  );
}
