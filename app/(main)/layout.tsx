import React from "react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";
import { getCurrentUser } from "@/utils/actions/user.action";
import { SocketProvider } from "@/providers/SocketProvider";
<<<<<<< HEAD
export const dynamic = "force-dynamic";
=======


export const dynamic = "force-dynamic";

>>>>>>> a8b425ebeb616142fedf24e0846f1593214bfd41
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
    <>
      <SocketProvider>
        <Navbar user={userData} />
        {children}
        <div className="sticky bottom-0 md:hidden">
          <Footer />
        </div>
      </SocketProvider>
    </>
  );
}
