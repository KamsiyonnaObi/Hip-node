import { Input } from "@/components/form/Input";
import { Info } from "@/components/home/Info";
import FillIcon from "@/components/icons/FillIcon";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

const signIn = () => {
  return (
    <main>
      <article>
        <div>
          {/* Header */}
          <h1>Join a thriving community of entrepreneurs and developers.</h1>
          {/* Info cards */}
          <div>
            <Info fillIcon={<FillIcon.Business />}>
              Connect with other indie hackers running online businesses.
            </Info>
            <Info fillIcon={<FillIcon.Feedback />}>
              Get feedback on your business ideas, landing pages, and more.
            </Info>
            <Info fillIcon={<FillIcon.Inbox />}>
              Get the best new stories from founders in your inbox
            </Info>
          </div>
          <div>
            <div>
              <h1>Choose a username</h1>
              <Input />
              <Button>Next</Button>
              <p>
                Already have an account?{" "}
                <Link href={"/"}>
                  <span>Sign in</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default signIn;
