import Image from "next/image";
import ChatInput from "./ChatInput";

interface Props {
  title: string;
  tags: string[];
  content: string;
  image: string;
  postId: string;
}

const OpenedPost = ({ title, tags, content, image, postId }: Props) => {
  return (
    <section className="flex flex-col gap-5 rounded-lg bg-background dark:bg-dark3 md:rounded-b-none">
      <div className="relative h-[103px] w-full md:h-[273px]">
        <Image
          src={
            image ||
            "https://res.cloudinary.com/colbycloud-next-cloudinary/image/upload/v1699045854/CldUploadWidget-unsigned/bqwwegsp23vk00e5ifck.png"
          }
          alt="cover"
          fill={true}
          className="absolute h-auto w-full rounded-t-lg object-cover"
        />
      </div>
      <article className="flex flex-col gap-5 px-5 pb-5 md:px-[30px] md:pb-[30px]">
        <div className="flex items-center gap-[26px]">
          <h3 className="h3-regular text-secondary5">H1</h3>
          <h1 className="display-semibold md:h1-semibold text-secondary2 dark:text-background2">
            {title}
          </h1>
        </div>
        <p className="display-regular flex gap-6 pl-[47px] text-yellow90">
          {tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </p>

        <h3 className="body-regular md:h3-semibold mb-2.5 whitespace-pre-wrap pl-[47px] text-secondary3 md:mb-5">
          {content}
        </h3>
        <div className="">
          <ChatInput postId={postId} />
        </div>
      </article>
    </section>
  );
};

export default OpenedPost;
