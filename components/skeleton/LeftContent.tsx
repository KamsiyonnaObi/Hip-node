const LeftContent = () => {
  return (
    <aside className="flex w-full flex-col gap-5 lg:w-fit">
      <div className="h-[60px] w-full animate-pulse rounded-2xl bg-bkg-2 md:h-[180px] lg:w-[210px]" />
      <div className="hidden h-[338px] w-[210px] animate-pulse rounded-2xl bg-bkg-2 lg:block" />
      <div className="hidden h-[284px] w-[210px] animate-pulse rounded-2xl bg-bkg-2 lg:block" />
    </aside>
  );
};

export default LeftContent;
