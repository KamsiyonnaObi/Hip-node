import { ImageFallback as Image } from "@/components/shared/ImageFallback";

const OtherUserMesssage = () => {
  return (
    <section className="flex w-full gap-2.5">
      <Image
        src="/ExampleAvatar2.png"
        alt="avatar"
        width={20}
        height={20}
        className="h-7 w-7 shrink-0 rounded-full bg-blue md:h-10 md:w-10"
      />
      <div className="flex max-w-[255px] flex-1 rounded-r-lg rounded-bl-lg rounded-tl-sm bg-red10 p-3.5 md:max-w-[360px]">
        <p className="md:display-semibold body-semibold whitespace-normal text-red80">
          What’s the update?
        </p>
      </div>
    </section>
  );
};

export default OtherUserMesssage;
