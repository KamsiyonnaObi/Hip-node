import LeftSideBar from "@/components/profile/LeftSideBar";

export default async function Profile() {
  return (
    <section className="flex h-screen justify-center">
      <article className="flex flex-col">
        <LeftSideBar />
      </article>
    </section>
  );
}
