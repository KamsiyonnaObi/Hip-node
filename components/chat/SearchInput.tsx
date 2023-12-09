import OutlineIcon from "../icons/OutlineIcon";

const SearchInput = () => {
  return (
    <section className="relative flex h-11 w-full items-center justify-between gap-5 rounded-lg bg-secondary6 p-5 dark:bg-dark4">
      <input
        className="body-regular flex flex-1 resize-none items-center  justify-start bg-secondary6 text-secondary4 placeholder:text-secondary4 focus:outline-none dark:bg-dark4"
        placeholder="Type here to search..."
      />

      <button className="flex items-center">
        <OutlineIcon.SearchIcon className="h-5 w-5 stroke-secondary4" />
      </button>
    </section>
  );
};

export default SearchInput;
