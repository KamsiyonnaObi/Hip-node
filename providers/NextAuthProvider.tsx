"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
type Props = {
  children: React.ReactNode;
  session: Session | null;
};
export default function NextAuthProvider({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
