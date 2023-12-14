import { formatDistanceToNow } from "date-fns";

const MyMessage = ({ createdAt, text }: { createdAt: Date; text: string }) => {
  const dateCreatedAt = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  });
  return (
    <section className="flex w-full flex-col gap-1.5">
      <div className="flex justify-between gap-2.5">
        <p className="display-semibold text-secondary2 dark:text-background2">
          You
        </p>
        <p className="display-semibold text-secondary4">{dateCreatedAt}</p>
      </div>
      <div className="flex max-w-[255px] flex-1 flex-wrap rounded-b-lg rounded-tl-lg bg-red80  p-3.5 md:max-w-[360px]">
        <p className="md:display-semibold body-semibold whitespace-pre-wrap text-background ">
          {text}
        </p>
      </div>
    </section>
  );
};

export default MyMessage;
