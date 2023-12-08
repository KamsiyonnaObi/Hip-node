import MyMessage from "../chat/MyMessage";
import OtherUserMesssage from "../chat/OtherUserMessage";

const RightChatList = () => {
  return (
    <section className="flex w-full flex-col">
      <div className="flex flex-1 flex-col gap-4 overflow-y-scroll bg-background px-8 pb-8 pt-[21px] dark:bg-dark4">
        <div className="flex self-start">
          <OtherUserMesssage />
        </div>
        <div className="flex self-end">
          <MyMessage />
        </div>
      </div>
    </section>
  );
};

export default RightChatList;
