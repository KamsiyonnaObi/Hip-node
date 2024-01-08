import { useSocketContext } from "@/providers/SocketProvider";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import OutlineIcon from "../icons/OutlineIcon";

const NavTopCard = ({
  onDownArrowClick,
  onExpandClick,
  isNavChatListOpen,
}: {
  onDownArrowClick: () => void;
  onExpandClick: () => void;
  isNavChatListOpen: boolean;
}) => {
  const { currentPartner, activeUserList, setIsChatPopUpOpen } =
    useSocketContext();
  const handleUserClick = () => {
    setIsChatPopUpOpen(false);
  };

  return (
    <section className="flex justify-between border-b  border-b-secondary6 pb-[15px] dark:border-b-secondary2">
      <div className="justify-centers flex items-center">
        <div className="flex items-center justify-center gap-4">
          <Image
            key={currentPartner?.profileImage}
            src={currentPartner?.profileImage}
            alt="avatar"
            width={20}
            height={20}
            className="h-14 w-14 shrink-0 rounded-full"
          />

          <div className="flex flex-col">
            <h2 className="md:h3-semibold body-semibold text-secondary2 dark:text-background2 ">
              {currentPartner?.fullName}
            </h2>
            <p>
              {activeUserList.includes(currentPartner?._id.toString()!) ? (
                <p className="md:text-sm-semibold text-xs-semibold text-green">
                  Online
                </p>
              ) : (
                <p className="md:text-sm-semibold text-xs-semibold fill-secondary5">
                  Offline
                </p>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5">
        <button onClick={handleUserClick}>
          <OutlineIcon.Close className="fill-secondary2 dark:fill-background2" />
        </button>
        {isNavChatListOpen && (
          <button onClick={onDownArrowClick}>
            <OutlineIcon.DownArrow className="fill-none stroke-secondary2 dark:stroke-background2" />
          </button>
        )}
        {!isNavChatListOpen && (
          <button onClick={onExpandClick}>
            <OutlineIcon.Expand className="fill-none stroke-secondary2 dark:stroke-background2" />
          </button>
        )}
      </div>
    </section>
  );
};

export default NavTopCard;
