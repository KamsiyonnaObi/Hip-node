import React from "react";
import Image from "next/image";
import FillIcon from "./icons/FillIcon";

interface Props {
  postImage: string;
  title: string;
  tags: string[];
  avatar: string;
  name: string;
  createdAt: string;
  views: number;
  likes: number;
  comments: number;
}

const Post = ({
  postImage,
  title,
  tags,
  avatar,
  name,
  createdAt,
  views,
  likes,
  comments,
}: Props) => {
  return (
    <article className="flex w-[335px] flex-row gap-[30px] rounded-[10px] bg-background p-[14px] md:w-[785px] md:rounded-[16px] md:p-[20px]">
      <div className="flex flex-row gap-[14px]">
        <Image
          src={postImage}
          alt="Post"
          className="h-[56px] w-[56px] md:h-[156px] md:w-[156px]"
          width={56}
          height={56}
        />
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-row gap-5">
            <section className="flex w-[187px] flex-col md:w-[512px]">
              <h3 className="md:h3-semibold caption-semibold">{title}</h3>
              <div className="mt-2 flex flex-row gap-[10px]">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="text-xs-semibold gap-[10px] rounded-[20px] bg-secondary6 px-[8px] py-[2px] text-center text-secondary4"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </section>
            <section className="flex h-[30px] w-[30px] items-center justify-center rounded-[15px] bg-secondary6 md:gap-[5px] md:p-[5px]">
              <FillIcon.Heart className="hidden fill-secondary5 md:flex" />
              <Image
                className="md:hidden"
                src={avatar}
                alt="avatar"
                width={20}
                height={25}
              />
            </section>
          </div>
          <div className="flex flex-row gap-[10px]">
            <section className="hidden items-center justify-center rounded-full bg-purple10 md:flex md:h-[40px] md:w-[40px]">
              <Image src={avatar} alt="avatar" width={28} height={32} />
            </section>
            <section className="flex flex-row justify-between md:w-[521px]">
              <div className="hidden flex-col md:flex">
                <p className="md:body-semibold">{name}</p>
                <p className="md:text-sm-regular text-secondary3">
                  {createdAt}
                </p>
              </div>
              <div className="md:body-regular text-xs-regular flex flex-row items-center justify-center gap-[40px] text-secondary3">
                <p>{views} Views</p>
                <p>{likes} Likes</p>
                <p>{comments} Comments</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
