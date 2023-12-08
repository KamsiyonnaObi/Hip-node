import { ImageFallback as Image } from "@/components/shared/ImageFallback";

const OtherUserMesssage = () => {
  return (
    <section className="flex w-full flex-col gap-1.5">
      <section className="flex items-center justify-between">
        <div className="mr-8 flex items-center gap-3">
          <div className="relative flex items-center gap-3">
            <Image
              src="/ExampleAvatar2.png"
              alt="avatar"
              width={20}
              height={20}
              className="h-7 w-7 shrink-0 rounded-full md:h-10 md:w-10"
            />
            <span className="absolute left-[18%] top-3/4 h-2.5 w-2.5 rounded border border-white bg-success500" />
            <p className="display-semibold  text-secondary2 dark:text-background">
              Ronald Richards
            </p>
          </div>
        </div>
        <p className="display-semibold text-secondary4">5min ago</p>
      </section>
      <div className="ml-[52px] flex max-w-[255px] flex-1 rounded-r-lg rounded-bl-lg bg-red10 p-3.5 md:max-w-[360px]">
        <p className="md:display-semibold body-semibold whitespace-normal text-red80">
          What’s the update?
        </p>
      </div>
    </section>
  );
};

export default OtherUserMesssage;