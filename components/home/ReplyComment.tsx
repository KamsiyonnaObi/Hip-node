import Image from "next/image";
import { format } from "date-fns";

import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";

interface ReplyProps {
  name: string;
  commentedDate: string;
  lastEditDate: string;
  imgUrl: string;
  comment: string;
}

export const ReplyComment = ({
  name,
  commentedDate,
  lastEditDate,
  imgUrl,
  comment,
}: ReplyProps) => {
  const formattedDate = format(new Date(commentedDate), "MMM dd");

  let editedText;
  if (lastEditDate) {
    editedText = ` • Edited on ${format(new Date(lastEditDate), "MMM dd")}`;
  }

  return (
    <section className="ml-[65px] mt-5 flex gap-5 bg-background dark:bg-dark3 md:mt-[30px]">
      <div className="relative h-11 w-11 shrink-0 rounded-full bg-yellow30">
        <Image
          className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 md:h-10 md:w-10"
          src={imgUrl}
          alt="profile"
          width="80"
          height="80"
        />
      </div>
      <section className="flex flex-col gap-[15px] bg-background dark:bg-dark3">
        <article className="flex flex-col gap-[15px] rounded-3xl border border-secondary5 bg-background p-[15px] dark:bg-dark3">
          <p className="md:body-regular caption-regular text-secondary2 dark:text-background2 ">
            <span className="body-semibold md:display-semibold ">{name} </span>•{" "}
            {formattedDate}
            {editedText}
          </p>
          <p className="body-regular text-secondary3">{comment}</p>
        </article>
        <div className="flex gap-5 pl-[15px]">
          <FillIcon.Heart className="h-5 w-5 fill-secondary3" />
          <FillIcon.Reply className="h-5 w-5 fill-secondary3" />
          <OutlineIcon.More className="h-5 w-5 fill-secondary3" />
        </div>
      </section>
    </section>
  );
};
