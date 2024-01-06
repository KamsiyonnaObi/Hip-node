import { IMessage } from "@/models/message.model";
import NavMessage from "./NavMessage";
import { getAllMessages } from "@/utils/actions/message.action";

const MessageList = async () => {
  const allMessages = await getAllMessages();
  const objAllMessages = JSON.parse(allMessages);
  return (
    <>
      <div className="relative w-5 translate-x-[50%] overflow-hidden max-md:hidden">
        <div className=" h-3 w-3 origin-bottom-left rotate-45 rounded-md bg-background dark:bg-dark4  "></div>
      </div>
      <article className="fixed right-[10%] flex h-[428px] w-[336px] flex-col rounded-[8px] bg-background shadow-lg dark:bg-dark4 max-md:top-[3.5rem] md:mr-0 ">
        <div className="mt-2.5 gap-2.5 rounded-[8px] bg-background p-5 text-secondary2 dark:bg-dark4 dark:text-background2">
          <div className="flex flex-col gap-5">
            <ul className="flex flex-col gap-5">
              <li className="h3-semibold flex justify-start">Messages</li>
              {objAllMessages.map((message: IMessage) => (
                <NavMessage
                  key={message._id}
                  avatar={message.userIdFrom.profileImage}
                  name={message.userIdFrom.fullName}
                  sentAt="20 minutes ago"
                  message={message.text}
                  count={2}
                />
              ))}
              <NavMessage
                avatar="/Avatar.png"
                name="Wade Warren"
                sentAt="20 minutes ago"
                message="Congrats on your work anniversary!"
                count={2}
              />
              <NavMessage
                avatar="/Avatar.png"
                name="Wade Warren"
                sentAt="20 minutes ago"
                message="Congrats on your work anniversary!"
                count={2}
              />
              <NavMessage
                avatar="/Avatar.png"
                name="Wade Warren"
                sentAt="20 minutes ago"
                message="Congrats on your work anniversary!"
                count={2}
              />
              <NavMessage
                avatar="/Avatar.png"
                name="Wade Warren"
                sentAt="20 minutes ago"
                message="Congrats on your work anniversary!"
                count={3}
              />
              <NavMessage
                avatar="/Avatar.png"
                name="Wade Warren"
                sentAt="20 minutes ago"
                message="Congrats on your work anniversary!"
                count={0}
              />
            </ul>
            <p className="body-semibold flex justify-center text-blue">
              See all in Messenger
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default MessageList;
