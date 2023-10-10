import { Info } from "@/components/Info";
import FillIcon from "@/components/icons/FillIcon";
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
            <Info fillIcon={FillIcon.Business}>
              Connect with other indie hackers running online businesses.
            </Info>
            <Info fillIcon={FillIcon.Feedback}>
              Get feedback on your business ideas, landing pages, and more.
            </Info>
            <Info fillIcon={FillIcon.Inbox}>
              Get the best new stories from founders in your inbox
            </Info>
          </div>
        </div>
      </article>
    </main>
  );
};

export default signIn;
