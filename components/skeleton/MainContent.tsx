const MainContent = () => {
  return (
    <section className="flex w-full flex-col">
      <section className="flex flex-col gap-5">
        <div className="h-[86px] animate-pulse rounded-2xl bg-bkg-2" />
        {[...Array(5)].map((item, index) => (
          <article
            className="h-[196px] w-full animate-pulse rounded-2xl bg-bkg-2"
            key={index}
          />
        ))}
      </section>
    </section>
  );
};

export default MainContent;
