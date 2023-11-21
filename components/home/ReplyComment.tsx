import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import { format } from "date-fns";

import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";
import { Curve } from "../icons/outlineIcons/Curve";

interface ReplyProps {
  name: string;
  commentedDate: string;
  lastEditDate: string;
  imgUrl: string;
  comment: string;
}

const ReplyComment = ({
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
    <section className="flex gap-5 bg-background2 dark:bg-dark2 md:bg-background md:dark:bg-dark3">
      <div className="flex">
        <Curve className="h-11 w-11 stroke-secondary5" />
        <div className="relative h-11 w-11 shrink-0 rounded-full bg-yellow30">
          <Image
            className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 md:h-10 md:w-10"
            src={imgUrl}
            alt="profile"
            width="80"
            height="80"
          />
        </div>
      </div>
      <section className="flex flex-col gap-[15px]">
        <article className="flex flex-col gap-[15px] rounded-3xl border border-secondary5 p-[15px]">
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

export default ReplyComment;
