import { uniques } from "@/utils";
import Tag from "./Tag";

const Tags = ({ tags }: { tags: string[] }) => {
  tags = uniques(tags);

  return (
    <ul className="flex gap-5 text-yellow90 ">
      {tags.map((tag) => (
        <Tag key={"tag-" + tag.toLocaleLowerCase()} text={tag} />
      ))}
    </ul>
  );
};

export default Tags;
