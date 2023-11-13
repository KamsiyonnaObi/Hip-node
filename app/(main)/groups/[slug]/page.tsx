import React from "react";

const page = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-3">
        <div className="bg-yellow w-full h-full lg:row-start-1 lg:col-start-2 md:row-start-1 md:col-start-1">
          Cover
        </div>
        <div className="bg-[#03fc94] w-full h-full lg:row-start-1 lg:col-start-3 md:row-start-1 md:col-start-2">
          Create
        </div>
        <div className="bg-[#fc03e8] w-full h-full lg:row-start-2 lg:col-start-2 md:row-start-2 md:col-start-1">
          Bar
        </div>
        <div className="bg-black w-full h-full lg:row-start-3 lg:col-start-2 md:row-start-3 md:col-start-1">
          Post
        </div>
        <div className="bg-purple w-full h-full lg:row-start-2 lg:col-start-3 md:row-start-2 md:col-start-2">
          Active
        </div>
        <div className="bg-[#82581d] w-full h-full lg:row-start-3 lg:col-start-3 md:row-start-3 md:col-start-2">
          Media
        </div>
        <div className="bg-green h-[10rem] w-full lg:row-start-1 lg:col-start-1 md:row-start-4 md:col-start-2">
          About
        </div>
        <div className="bg-blue w-full h-full lg:row-start-2 lg:col-start-1 md:row-start-5 md:col-start-2">
          Admins
        </div>
        <div className="bg-red w-full h-full hidden lg:block lg:row-start-3 lg:col-start-1">
          Tags
        </div>
      </div>
    </>
  );
};

export default page;
