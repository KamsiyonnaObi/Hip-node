import ChatCard from "@/components/chat/ChatCard";
import ChatInput from "@/components/chat/ChatInput";
import SearchInput from "@/components/chat/SearchInput";
import TopCard from "@/components/chat/TopCard";
import RightChatList from "@/components/signin/RightChatList";

const page = ({ isOnline }: { isOnline: boolean }) => {
  return (
    <main className="grid bg-background dark:bg-dark2 md:grid-cols-10">
      <section className="flex w-full flex-col md:col-span-3">
        <div className="flex items-center justify-start gap-2 p-6">
          <h2 className="h2-bold text-secondary2 dark:text-background">
            Messages
          </h2>
          <div className="flex h-5 w-6 items-center justify-center rounded-full bg-red10">
            <p className="caption-regular text-red90">2</p>
          </div>
        </div>
        <div className="px-4 pb-3">
          <SearchInput />
        </div>
        <section className="min-h-screen">
          <ChatCard />
        </section>
      </section>
      <div className="fixed inset-x-0 top-20 z-[1] hidden bg-background  dark:bg-dark4 md:left-[30%] md:block">
        <div className="mx-auto w-full">
          <TopCard isOnline={isOnline} />
        </div>
      </div>
      <div className="col-span-7 mt-[96px] hidden min-h-screen md:flex">
        <RightChatList />
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
