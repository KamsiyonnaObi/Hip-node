import Link from "next/link";

import OutlineIcon from "@/components/icons/OutlineIcon";
import Preview from "./Preview";

const PodcastsPreview = () => {
  return (
    <div className="hidden w-full flex-col gap-5 rounded-2xl bg-bkg-2 p-5 md:flex">
      <Link href="/" className="flex w-fit items-center gap-1">
        <p className="font-semibold hover:dark:text-white/60">Podcasts</p>
        <OutlineIcon.RightArrow className="h-fit w-fit" />
      </Link>
      <ul>
        <Preview />
      </ul>
    </div>
  );
};

export default PodcastsPreview;
