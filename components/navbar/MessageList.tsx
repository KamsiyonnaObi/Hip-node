import React from "react";
import NavMessage from "./NavMessage";

const MessageList = () => {
  return (
    <>
      <div className="relative w-5 translate-x-[50%] overflow-hidden max-md:hidden">
        <div className=" h-3 w-3 origin-bottom-left rotate-45 rounded-md bg-background dark:bg-dark4  "></div>
      </div>
      <article className="fixed flex h-[428px] w-[336px] flex-col rounded-[8px] bg-background dark:bg-dark4 max-md:left-[50%] max-md:top-[3.5rem] max-md:translate-x-[-50%] md:translate-x-[-80%] ">
        <div className="mt-2.5 gap-2.5 rounded-[8px] bg-background p-5 text-secondary2 dark:bg-dark4 dark:text-background2">
          <div className="flex flex-col gap-5">
            <ul className="flex flex-col gap-5">
              <li className="h3-semibold flex justify-start">Messages</li>
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
