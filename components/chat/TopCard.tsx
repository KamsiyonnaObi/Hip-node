"use client";
import Link from "next/link";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import { useSocketContext } from "@/providers/SocketProvider";

const TopCard = () => {
  const { currentPartner, activeUserList } = useSocketContext();

  return (
    <section className="flex justify-between bg-secondary6 px-5 pb-5 dark:bg-dark2 md:px-6 md:pt-5">
      <div className="justify-centers flex items-center">
        <div className="ml-[46px] flex items-center justify-center gap-4 md:ml-0">
          <Image
            src={currentPartner?.profileImage}
            alt="avatar"
            width={20}
            height={20}
            className="h-14 w-14 shrink-0 rounded-full"
          />

          <div className="flex flex-col">
            <div className="flex items-center justify-center gap-2">
              <h2 className="h2-bold text-secondary2 dark:text-background ">
                {currentPartner?.fullName}
              </h2>
              {activeUserList.includes(currentPartner?._id.toString()!) ? (
                <p className="text-sm-semibold text-green">Online</p>
              ) : (
                <p className="text-sm-semibold fill-secondary5">Offline</p>
              )}
            </div>
            <p> {currentPartner?.username}</p>
          </div>
        </div>
      </div>
      <Link
        className="hidden h-11 w-auto items-center justify-center rounded-md bg-red80 px-4 py-3 md:flex"
        href={`/profile/${currentPartner?._id}`}
      >
        <p className="body-semibold text-background">View Profile</p>
      </Link>
    </section>
  );
};

export default TopCard;
