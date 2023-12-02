"use client";
import { useState } from "react";

import OutlineIcon from "../icons/OutlineIcon";
import { reportPost } from "@/utils/actions/post.action";
import { reportReasons } from "@/lib/constants";

interface Props {
  postId: string;
  userId?: string;
  close: () => void;
}

const ReportModal = ({ postId, close }: Props) => {
  const [selectedReason, setSelectedReason] = useState("");
  const handleSubmitReport = async () => {
    close();
    await reportPost({
      postId,
      selectedReason,
    });
  };

  return (
    <section className="fixed left-1/2 top-1/2 z-10 flex h-auto w-96 -translate-x-1/2 -translate-y-1/2 flex-col gap-[30px] rounded-lg bg-secondary p-[30px] dark:bg-dark3">
      <div className="flex items-center justify-between">
        <h2 className="h1-semibold text-secondary3">Report</h2>
        <button
          onClick={close}
          className="flex h-10 w-10 items-center justify-center text-lg"
        >
          <OutlineIcon.Close />
        </button>
      </div>
      <h3 className="h3-semibold text-secondary3">
        Why are you reporting this post?
      </h3>
      <div className="md:h3-regular body-regular flex flex-col gap-5 text-secondary3">
        {reportReasons.map((reason) => (
          <div key={reason} className="flex gap-2">
            <input
              type="radio"
              id={reason}
              value={reason}
              name="reportReason"
              checked={selectedReason === reason}
              onChange={() => setSelectedReason(reason)}
            />
            <label htmlFor={reason}>{reason}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          // disabled={isPending}
          onClick={handleSubmitReport}
          className="h3-semibold flex h-11 w-72 items-center justify-center gap-2.5 rounded-md bg-blue text-background2"
        >
          Submit Report
        </button>
      </div>
    </section>
  );
};

export default ReportModal;
