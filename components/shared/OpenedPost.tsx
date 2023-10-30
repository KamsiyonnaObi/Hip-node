import Image from "next/image";
import ChatInput from "../home/ChatInput";
import { commentData } from "@/constants/dummy";
import { Thread } from "../home/Thread";

const OpenedPost = () => {
  return (
    <section className="flex flex-col gap-5 rounded-2xl bg-background p-5 dark:bg-dark3 md:px-[30px]">
      <div className="relative h-[103px] w-full md:h-[273px]">
        <Image
          src="/postCover.png"
          alt="cover"
          fill={true}
          className="absolute h-auto w-full rounded-t-lg object-cover"
        />
      </div>
      <article className="flex flex-col gap-5 md:mb-2.5">
        <div className="flex items-center gap-[26px]">
          <h3 className="h3-regular text-secondary5">H1</h3>
          <h1 className="display-semibold md:h1-semibold text-secondary2 dark:text-background2">
            Ollie Cat Illustration Pack Design with Figma, XD and SVG.
          </h1>
        </div>
        <p className="display-regular pl-[47px] text-yellow90">
          #catillustration #illustrationdesign #catillustrationart
        </p>
        <h3 className="body-regular md:h3-semibold pl-[47px] text-secondary3">
          Ollie Cat Illustration Pack <br />
          <span></span>
          <br />
          Searching for new ideas for cat projects or wanting to draw something
          cute, this Ollie Cat Illustration Pack is for you! Ollie Cat
          Illustration Pack contains 25 creative illustrations, featuring cats,
          food bowls, toys, and more. Each of the simple cat illustrations was
          carefully crafted to bring out the best in them. <br />
          <span></span>
          <br />
          Each of the simple cute cat illustrations is perfect for any project
          (Website, Mobile App, Web app, presentations). Check it out!
        </h3>
        <div className="pl-[47px] md:pl-0">
          <ChatInput />
        </div>
      </article>
    </section>
  );
};

export default OpenedPost;
