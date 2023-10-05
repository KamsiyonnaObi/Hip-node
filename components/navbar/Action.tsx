import FillIcon from "../icons/FillIcon";

export const Action = () => {
  return (
    <>
      <div className="flex items-center gap-[30px] bg-background px-[27px] py-3.5 dark:bg-dark3">
        <button className=" rounded-[7px] p-2.5 focus:bg-red">
          <FillIcon.Home />
        </button>
        <button className=" rounded-[7px] p-2.5 focus:bg-red">
          <FillIcon.Calendar />
        </button>
        <button className=" rounded-[7px] p-2.5 focus:bg-red">
          <FillIcon.Group />
        </button>
        <button className="rounded-[7px] p-2.5 focus:bg-red">
          <FillIcon.Podcast />
        </button>
        <button className=" rounded-[7px] p-2.5 focus:bg-red">
          <FillIcon.Interviews />
        </button>
      </div>
    </>
  );
};
