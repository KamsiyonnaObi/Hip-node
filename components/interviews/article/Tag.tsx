const Tag = ({ text }: { text: string }) => {
  return <li className="rounded-full bg-bkg-3 px-2">#{text}</li>;
};

export default Tag;
