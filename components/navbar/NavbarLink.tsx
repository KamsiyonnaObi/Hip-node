import Link from "next/link";
import FillIcon from "../icons/FillIcon";
import { Button } from "../ui/Button";

const NavbarLink = ({
  path,
  pathname,
  iconName,
}: {
  path: string;
  pathname?: string | null;
  iconName: string;
}) => {
  const DynamicIcon = FillIcon[iconName as keyof typeof FillIcon];
  return (
    <Link href={path}>
      <Button
        className={`items-center gap-2.5 p-2.5 ${
          pathname?.startsWith(path)
            ? "bg-primary"
            : "bg-secondary6  dark:bg-dark4"
        }`}
      >
        <DynamicIcon
          className={`${
            pathname?.startsWith(path)
              ? "fill-background"
              : "fill-secondary4 dark:fill-secondary6"
          }`}
        />
      </Button>
    </Link>
  );
};

export default NavbarLink;
