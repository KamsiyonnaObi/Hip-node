const MyMessage = () => {
  return (
    <section className="flex w-full flex-col gap-1.5">
      <div className="flex justify-between">
        <p className="display-semibold text-secondary2 dark:text-background2">
          You
        </p>
        <p className="display-semibold text-secondary4">10:31am</p>
      </div>
      <div className="flex max-w-[255px] flex-1 flex-wrap rounded-b-lg rounded-tl-lg bg-red80  p-3.5 md:max-w-[360px]">
        <p className="md:display-semibold body-semibold whitespace-pre-wrap text-background ">
          Did you checked the last update?
        </p>
      </div>
    </section>
  );
};

export default MyMessage;
