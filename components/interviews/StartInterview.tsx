import Image from "next/image";

import { InterviewIllustration } from "@/utils/images";
import { ShadButton } from "../ui/ShadButton";

const StartInterview = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl bg-[#FF7C4D] p-5 text-white">
      <div className="flex max-w-[325px] flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Start Your Interview</p>
          <small className="text-xs">
            Working on your own internet business? We&apos;d love to interview
            you!
          </small>
        </div>
        <div className="flex justify-between">
          <ShadButton className="bg-red60 text-red10">
            Code of Conduct
          </ShadButton>
          <ShadButton className="bg-white text-red80 hover:text-white">
            Submit a Story
          </ShadButton>
        </div>
      </div>
      <Image
        src={InterviewIllustration}
        alt="Illustration of Man and Woman interview"
        className="hidden h-28 w-28 sm:block md:hidden"
      />
    </div>
  );
};

export default StartInterview;
