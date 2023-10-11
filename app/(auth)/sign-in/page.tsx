import { Input } from "@/components/form/Input";
import { Info } from "@/components/home/Info";
import FillIcon from "@/components/icons/FillIcon";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

const signIn = () => {
  return (
    <main className="bg-background2 px-6 dark:bg-dark2">
      <article className="flex flex-col gap-y-20">
        {/* Header */}
        <div>
          <div className="mb-10 max-w-[250px]">
            <h1 className="h3-semibold">
              Join a thriving community of entrepreneurs and developers.
            </h1>
          </div>
          {/* Info cards */}
          <div className="flex flex-col gap-5">
            <Info
              className="bg-red10"
              fillIcon={<FillIcon.Business className="fill-red90" />}
            >
              Connect with other indie hackers running online businesses.
            </Info>
            <Info
              className="bg-yellow10"
              fillIcon={<FillIcon.Feedback className="fill-yellow" />}
            >
              Get feedback on your business ideas, landing pages, and more.
            </Info>
            <Info
              className="bg-blue10"
              fillIcon={<FillIcon.Inbox className="fill-blue" />}
            >
              Get the best new stories from founders in your inbox
            </Info>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2.5">
              <h1 className="h3-semibold text-secondary2 dark:text-background2">
                Choose a username
              </h1>
              <Input
                divClassName="bg-background rounded-lg px-5 py-[13px]"
                className="w-full bg-transparent"
                placeholder="e.g Hipnode123"
              />
            </div>
            <div>
              <Button className="px-10 py-2.5">Next</Button>
            </div>
            <p className="body-regular">
              Already have an account?{" "}
              <Link href={"/"}>
                <span className="font-semibold text-red80">Sign in</span>
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Button
              full
              color="white"
              className="items-center justify-center py-3"
            >
              <FillIcon.Google className="fill-secondary2" />

              <p>Sign Up With Google</p>
            </Button>
            <Button
              full
              color="white"
              className="items-center justify-center py-3"
            >
              <FillIcon.Facebook className="fill-secondary2" />

              <p>Sign Up With Facebook</p>
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default signIn;
