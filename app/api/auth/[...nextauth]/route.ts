/* eslint-disable camelcase */
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import UserModel from "@/models/User";
import dbConnect from "@/utils/mongooseConnect";

interface User {
  id: string;
  name: string;
  email: string;
  local: boolean;
}
interface Profile {
  email: string;
  fullName: string;
  username: string;
  [key: string]: any;
}

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      async authorize(
        credentials: Record<"email" | "password", string>,
        req: any
      ): Promise<User | null> {
        try {
          await dbConnect();
          const { email, password } = credentials;
          const user = await UserModel.findOne({ email });
          if (!user) {
            return null;
          }
          const isPasswordValid = await user.checkPassword(password);
          if (!isPasswordValid) {
            return null;
          }
          const userObj = {
            id: user._id.toString(),
            name: user.fullName,
            email: user.email,
            local: true,
          };
          return userObj;
        } catch (error) {
          console.log("Authentication error ", error);
          return null;
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn(profile: Profile) {
      if (profile?.user.local) {
        return true;
      }
      const { name, email, image } = profile.user;
      const { given_name } = profile.profile;

      try {
        await dbConnect();
        let user = await UserModel.findOne({ email });

        if (!user) {
          user = await UserModel.create({
            username: name,
            fullName: given_name,
            profileImage: image,
            email,
          });
        }
      } catch (e) {
        console.error("Sign-in error:", e);
      }

      return true;
    },
  },
};

const handler = NextAuth(authOptions as any);

export { handler as GET, handler as POST };
