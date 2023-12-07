import Link from "next/link";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import OutlineIcon from "../icons/OutlineIcon";

const TopCard = ({ isOnline }: { isOnline: boolean }) => {
  return (
    <section className="flex justify-between bg-secondary6 px-6 py-5 dark:bg-dark2">
      <div className="justify-centers flex items-center">
        <Link
          className="relative mr-4 h-7 w-7 items-center justify-center rounded-lg bg-background p-2 dark:bg-dark4 md:hidden"
          href="/"
        >
          <OutlineIcon.Arrow className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-180 stroke-secondary4" />
        </Link>
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/ExampleAvatar2.png"
            alt="avatar"
            width={20}
            height={20}
            className="h-14 w-14 shrink-0 rounded-full"
          />
          <div className="flex flex-col">
            <div className="flex items-center justify-center gap-2">
              <h2 className="h2-bold text-secondary2 dark:text-background ">
                Ronald Richards
              </h2>
              {isOnline ? (
                <p className="text-sm-semibold text-green">Online</p>
              ) : (
                <p className="text-sm-semibold text-red">Offline</p>
              )}
            </div>
            <p>@ronald</p>
          </div>
        </div>
      </div>
      <Link
        className="hidden h-11 w-auto items-center justify-center rounded-md bg-red80 px-4 py-3 md:flex"
        href="/"
      >
        <p className="body-semibold text-background">View Profile</p>
      </Link>
    </section>
  );
};

export default TopCard;
