import { formatDistanceToNow } from "date-fns";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import { useSocketContext } from "@/providers/SocketProvider";

const OtherUserMesssage = ({
  createdAt,
  text,
  currentPartner,
}: {
  createdAt: Date;
  text: string;
  currentPartner: string;
}) => {
  const dateCreatedAt = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  });
  const objCurrentPartner = JSON.parse(currentPartner);
  const activeUserList = useSocketContext().activeUserList;
  return (
    <section className="flex w-full gap-3">
      <div className="relative">
        <Image
          src={objCurrentPartner.profileImage}
          alt="avatar"
          width={20}
          height={20}
          className="h-7 w-7 shrink-0 rounded-full md:h-10 md:w-10"
        />
        {activeUserList.includes(objCurrentPartner) && (
          <span className="absolute left-[70%] top-1/3 h-2.5 w-2.5 rounded border border-white bg-success500" />
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between gap-2.5">
          <p className="display-semibold  text-secondary2 dark:text-background">
            {objCurrentPartner.fullname}
          </p>
          <p className="display-semibold text-secondary4">{dateCreatedAt}</p>
        </div>

        <div className="ml-[52px] flex max-w-[255px] flex-1 rounded-r-lg rounded-bl-lg bg-red10 p-3.5 md:max-w-[360px]">
          <p className="md:display-semibold body-semibold whitespace-normal text-red80">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OtherUserMesssage;
