import React from "react";

interface Props {
  title: string;
  icon: any;
  bgcolor: string;
  postNum: number;
  desc: string;
}

const Tag = ({ title, icon, bgcolor, postNum, desc }: Props) => {
  return (
    <div className="flex flex-row items-center gap-[10px] rounded-[6px] text-secondary4">
      <div
        className={`flex h-[28px] w-[28px] items-center justify-center gap-[10px] rounded-[6px] p-[6px] ${bgcolor}`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-[1px]">
        <p className="body-semibold ">#{title}</p>
        <p className="text-sm-regular">
          {postNum} {desc}
        </p>
      </div>
    </div>
  );
};

export default Tag;
