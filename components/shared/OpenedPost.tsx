import Image from "next/image";
import ChatInput from "../home/ChatInput";

interface Props {
  title: string;
  tags: string[];
  content: string;
  image: string;
}

const OpenedPost = ({ title, tags, content, image }: Props) => {
  return (
    <section className="flex flex-col gap-5 rounded-lg md:rounded-b-none bg-background dark:bg-dark3">
      <div className="relative h-[103px] w-full md:h-[273px]">
        <Image
          src={image}
          alt="cover"
          fill={true}
          className="absolute h-auto w-full rounded-t-lg object-cover"
        />
      </div>
      <article className="flex flex-col gap-5 px-5 md:px-[30px] pb-5 md:pb-[30px]">
        <div className="flex items-center gap-[26px]">
          <h3 className="h3-regular text-secondary5">H1</h3>
          <h1 className="display-semibold md:h1-semibold text-secondary2 dark:text-background2">
            {title}
          </h1>
        </div>
        <p className="display-regular pl-[47px] text-yellow90 flex gap-6">
          {tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </p>

        <h3 className="body-regular whitespace-pre-wrap md:h3-semibold pl-[47px] text-secondary3 md:mb-5 mb-2.5">
          {content}
        </h3>
        <div className="pl-[47px] md:pl-0">
          <ChatInput />
        </div>
      </article>
    </section>
  );
};

export default OpenedPost;
