import FillIcon from "./icons/FillIcon";

export const Info = () => (
  <>
    <div className="flex max-w-[402px] items-center gap-5 bg-white dark:bg-dark3">
      <div className="flex rounded-lg bg-red10 p-5 dark:bg-dark4">
        <FillIcon.Business className="fill-red dark:fill-red90" />
      </div>
      <div className="flex">
        <p className="h3-semibold text-secondary2 dark:text-secondary6">
          Connect with other indie hackers running online businesses.
        </p>
      </div>
    </div>
  </>
);
