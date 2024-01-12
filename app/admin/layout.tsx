import AdminNav from "@/components/admin/AdminNav";
import AdminNotif from "@/components/admin/AdminNotif";
import { SocketProvider } from "@/providers/SocketProvider";
import { getCurrentUser } from "@/utils/actions/user.action";
import { ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = (await getCurrentUser()) as {
    username: string;
    profileImage: string;
  };

  const userData = {
    username: user?.username,
    profileImage: user.profileImage,
  };

  return (
    <SocketProvider>
      <div className="flex">
        <AdminNav user={userData} />
        <div className="m-8 flex w-full flex-col">
          <AdminNotif />
          {children}
        </div>
      </div>
    </SocketProvider>
  );
}
