import React from "react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";
import { getCurrentUser } from "@/utils/actions/user.action";
import { SocketProvider } from "@/providers/SocketProvider";
import { PodcastProvider } from "@/providers/PodcastProvider";

export const dynamic = "force-dynamic";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = (await getCurrentUser()) as unknown as {
    _id: string;
    username: string;
    profileImage: string;
  };

  const userData = {
    id: user?._id.toString(),
    username: user?.username,
    profileImage: user?.profileImage,
  };

  return (
    <>
      <SocketProvider>
        <PodcastProvider>
          <Navbar user={userData} />
          {children}
          <div className="sticky bottom-0 md:hidden">
            <Footer />
          </div>
        </PodcastProvider>
      </SocketProvider>
    </>
  );
}
