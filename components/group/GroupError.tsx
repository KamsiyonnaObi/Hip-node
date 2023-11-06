import Link from "next/link";
import { Button } from "../ui/Button";

const GroupError = () => {
  return (
    <article className="flex w-[20.938rem] flex-col gap-2.5 rounded-[16px] bg-[#FF7C4D] mt-[1.25rem] p-5 text-background">
      <div className="flex flex-col gap-5">
        <section className="flex flex-col gap-[6px]">
          <h3 className="h3-semibold flex justify-center">Group Not Found!</h3>
        </section>
        <section className="flex flex-row gap-[21px] justify-center w-full">
          <div className="w-[50%]">
            <Link href={"/groups/create"}>
              <Button className="body-semiboldrounded-[6px] bg-red60 px-4 py-[9px] w-full justify-center">
                Create Group
              </Button>
            </Link>
          </div>
          <div className="w-[50%]">
            <Link href={"/"}>
              <Button
                color="white"
                className="body-semibold rounded-[6px] py-[9px] text-red80 w-full  justify-center"
              >
                Go to Homepage
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
};

export default GroupError;
