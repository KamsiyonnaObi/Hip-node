"use client";
import OutlineIcon from "../icons/OutlineIcon";

type CloseType = () => void;
const ReportModal = ({ close }: { close: CloseType }) => {
  return (
    <section className="fixed left-1/2 top-1/2 z-10 flex h-96 w-96 -translate-x-1/2 -translate-y-1/2 flex-col gap-[30px] rounded-lg bg-secondary p-[30px] dark:bg-dark3">
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
    </section>
  );
};

export default ReportModal;
