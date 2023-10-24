import React from "react";
import FillIcon from "../icons/FillIcon";
import useThemeState from "@/store/themeStore";

const Popup = () => {
  const { theme, toggleTheme } = useThemeState();
  return (
    <div className="fixed mr-[160px] mt-[280px] h-[182px] w-[182px] rounded-[10px] bg-background dark:bg-dark4 md:mr-0">
      <ul className="display-semibold mx-5 my-[30px] flex flex-col gap-5 text-secondary2 dark:text-secondary6">
        <li className="flex flex-row gap-[14px]">
          <FillIcon.Profile className="fill-secondary2 dark:fill-secondary6" />
          <p>Profile</p>
        </li>
        <li className="flex flex-row gap-[14px]">
          <FillIcon.Settings className="fill-secondary2 dark:fill-secondary6" />
          <p>Settings</p>
        </li>
        <hr className="dark:text-secondary3" />
        <li className="flex flex-row gap-5">
          <p>Interface</p>
          <div className="gap-2.5 rounded-[15px] bg-background2 p-[3px] dark:bg-dark3">
            <div className=" flex flex-row gap-[6px]">
              <div
                className="w-6 gap-2.5 rounded-[15px] bg-background p-[4px] dark:bg-dark2"
                onClick={() => theme === "dark" && toggleTheme()}
              >
                <FillIcon.Sun className="h-4 w-4 fill-primary dark:fill-dark4" />
              </div>
              <div
                className="gap-2.5 rounded-[15px] bg-background2 p-[4px] dark:bg-dark4"
                onClick={() => theme === "light" && toggleTheme()}
              >
                <FillIcon.Moon className="h-4 w-4 fill-secondary5 dark:fill-secondary5" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Popup;
