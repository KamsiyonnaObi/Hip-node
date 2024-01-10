import ChatInput from "@/components/chat/ChatInput";
import TopCard from "@/components/chat/TopCard";
import RightChatList from "@/components/chat/RightChatList";
import { getCurrentUser } from "@/utils/actions/user.action";
import LeftChatList from "@/components/chat/LeftChatList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat | Hipnode",
  description:
    "Chat with other users on Hipnode a social media forum for developers",
  keywords: ["Hipnode", "chat", "community", "forum", "developers"],
};

const page = async () => {
  const currentUser = await getCurrentUser();
  const currentUserId = currentUser?._id;

  return (
    <main className="grid bg-background dark:bg-dark2 md:grid-cols-10">
      {currentUserId && (
        <LeftChatList currentUserId={currentUserId?.toString()} />
      )}

      <div className="fixed inset-x-0 top-20 z-[1] hidden bg-background  dark:bg-dark4 md:left-[30%] md:block">
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
    </main>
  );
};

export default page;
