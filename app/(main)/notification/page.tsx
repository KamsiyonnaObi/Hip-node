import Meetups from "@/components/home/Meetups";
import PinnedGroup from "@/components/home/PinnedGroup";
import PopularTags from "@/components/home/PopularTags";
import Sidebar from "@/components/home/Sidebar";
import NotificationPage from "@/components/navbar/NotificationPage";
import Podcasts from "@/components/Podcasts";

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string };
}) {
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
        <NotificationPage />
      </section>
      <section className="flex flex-col gap-5">
        <Meetups />
        <Podcasts />
      </section>
    </main>
  );
}
