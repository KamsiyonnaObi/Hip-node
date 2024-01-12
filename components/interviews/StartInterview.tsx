import { ShadButton } from "../ui/ShadButton";
import Link from "next/link";

const StartInterview = () => {
  return (
    <div className="flex w-full max-w-[325px] items-center justify-between rounded-2xl bg-[#FF7C4D] p-5 text-white shadow-lg">
      <div className="flex max-w-[325px] flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Start Your Interview</p>
          <small className="text-xs">
            Working on your own internet business? We&apos;d love to interview
            you!
          </small>
        </div>
        <div className="flex justify-center gap-[1.25rem]">
          <Link href="/info/code-of-conduct">
            <ShadButton className="bg-red60 text-red10">
              Code of Conduct
            </ShadButton>
          </Link>
          <Link href="/interview/new">
            <ShadButton className="bg-white text-red80 hover:text-white">
              Submit a Story
            </ShadButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartInterview;
