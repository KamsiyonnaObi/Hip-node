import FillIcon from "@/components/icons/FillIcon";
export const SignUpButton = () => (
  <>
    <div>
      <button className="rounded-lg bg-secondary6 px-[119px] py-3 font-bold dark:bg-dark4">
        <div className="flex gap-2.5">
          <div>
            <FillIcon.Twitter />
          </div>
          <p className="display-semibold text-secondary2 dark:text-background2">
            Sign Up With Twitter
          </p>
        </div>
      </button>
    </div>
  </>
);
