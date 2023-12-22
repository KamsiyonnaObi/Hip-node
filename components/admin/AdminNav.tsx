import Link from "next/link";

import { Logo } from "../icons/Logo";
import { ImageFallback as Image } from "@/components/shared/ImageFallback";
import FillIcon from "../icons/FillIcon";
import OutlineIcon from "../icons/OutlineIcon";

const AdminNav = ({
  user,
}: {
  user: { profileImage: string; username: string };
}) => {
  return (
    <nav className="flex h-screen w-60 shrink-0 flex-col items-center gap-8 py-8 dark:bg-d-dark-900">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex flex-col items-center gap-3">
        <figure className="h-fit w-fit overflow-hidden rounded-full">
          <Image
            src={user?.profileImage}
            alt={"User Avatar"}
            width={60}
            height={60}
          />
        </figure>
        <span className="flex flex-col items-center gap-1 font-semibold">
          {user?.username}
          <small className="text-xs text-secondary3">Administrator</small>
        </span>
      </div>
      <ul className="flex w-full flex-col items-start gap-4 pl-10 font-bold">
        <li className="w-full">
          <Link
            href="/admin"
            className="flex items-center gap-4 border-r-2 border-primary text-primary"
          >
            <FillIcon.Grid className="h-4 w-4 fill-primary" />
            Overview
          </Link>
        </li>
        <li className="w-full">
          <Link href="/admin" className="flex items-center gap-4">
            <FillIcon.User className="h-4 w-4 fill-white" />
            Users
          </Link>
        </li>
        <li className="w-full">
          <Link href="/admin" className="flex items-center gap-4">
            <OutlineIcon.Content className="h-4 w-4 fill-white" />
            Content
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
