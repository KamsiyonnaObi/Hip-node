import { CategoryLabel } from ".";

const InterviewCategory = ({ categories }: { categories: string[] }) => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-3xl bg-bkg-3 p-5 text-defaultText md:w-52">
      <h3 className="h3-semibold flex">Categories</h3>
      <ul className="flex flex-col gap-3">
        {categories.map((category) => (
          <CategoryLabel
            key={category.toLocaleLowerCase()}
            category={category}
          />
        ))}
      </ul>
    </div>
  );
};

export default InterviewCategory;
