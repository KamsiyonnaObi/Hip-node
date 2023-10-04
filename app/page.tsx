import FillIcon from "@/components/icons/FillIcon";

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold">Breaking Bugs Hipnode</h1>
      <p className="body-semibold">
        Welcome to the Breaking Bugs Hipnode! This is a Next.js project with
        Tailwind CSS.
      </p>
      <FillIcon.Rocket />
      <FillIcon.Comment />
      <FillIcon.Calendar />
    </div>
  );
}
