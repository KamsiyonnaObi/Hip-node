import { getCurrentUser } from "@/utils/actions/user.action";
import ChatInput from "../chat/ChatInput";
import RightChatList from "../chat/RightChatList";
import TopCard from "../chat/TopCard";

const NavMessagePopup = async () => {
  const currentUser = await getCurrentUser();
  const currentUserId = currentUser?._id;
  return (
    <>
      <div className="flex h-[402px] w-[335px] flex-col rounded-[16px] bg-background dark:bg-dark4 md:h-[450px] md:w-[450px]">
        <div className="mx-auto w-full">
          <TopCard />
        </div>
      </div>
      <div className="col-span-7 mt-[96px] hidden h-[70vh] md:flex">
        <RightChatList currentUserId={currentUserId?.toString() || ""} />
      </div>
      <div className="fixed inset-x-0 bottom-0 left-[30%] hidden bg-background px-8 pb-9 pt-8 dark:bg-dark4 md:block">
        <div className="mx-auto w-full">
          <ChatInput />
        </div>
      </div>
    </>
  );
};

export default NavMessagePopup;
