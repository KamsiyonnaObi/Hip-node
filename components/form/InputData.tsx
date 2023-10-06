export const InputData = ({ onChange, value, placeholder, icon }) => {
  return (
    <div className="flex justify-between">
      <input
        className="w-[420px] rounded-lg bg-secondary6 px-5 py-[13px] text-secondary2 placeholder:text-secondary3 dark:bg-dark2 dark:text-background2 dark:placeholder:text-secondary3"
        placeholder={placeholder || "Search"}
        value={value}
        onChange={onChange}
      />
      {icon}
    </div>
  );
};
