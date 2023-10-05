import FillIcon from "@/components/icons/FillIcon";
import OutlineIcon from "@/components/icons/OutlineIcon";

export default function Home() {
  return (
    <div className="m-6">
      <h1 className="h1-bold ">Breaking Bugs Hipnode</h1>
      <p className="body-semibold">
        Welcome to the Breaking Bugs Hipnode! This is a Next.js project with
        Tailwind CSS.
      </p>
      <div className="flex w-[500px] flex-wrap gap-4 py-6">
        <FillIcon.Rocket className="fill-red-900 stroke-slate-500" />
        <FillIcon.Comment />
        <FillIcon.Calendar />
        <FillIcon.Home />
        <FillIcon.Message />
        <FillIcon.Profile />
        <FillIcon.Facebook className="fill-blue stroke-slate-500" />
        <FillIcon.Google className="fill-blue stroke-green" />
        <FillIcon.Twitter className="fill-black stroke-white" />
        <FillIcon.Send />
        <FillIcon.Settings />
        <FillIcon.Share />
        <FillIcon.Thunderbolt className="fill-yellow" />
        <FillIcon.Heart />
        <FillIcon.Reply />
        <FillIcon.Group />
        <FillIcon.Follow />
        <FillIcon.Business />
        <FillIcon.Fire />
        <FillIcon.Notifications />
        <FillIcon.Inbox />
        <FillIcon.Growing />
        <FillIcon.Leave />
        <FillIcon.Interviews />
        <FillIcon.Post />
        <FillIcon.Report />
        <FillIcon.Moon />
        <FillIcon.Sun />
        <FillIcon.Feedback />
        <FillIcon.Podcast />
        <FillIcon.Menu />
      </div>
      <div className="flex w-[500px] flex-wrap gap-4 py-6">
        <OutlineIcon.Bitcoin className="fill-red-900" />
      </div>
    </div>
  );
}
