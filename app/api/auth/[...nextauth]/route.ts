import dbConnect from "@/utils/mongooseConnect";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { User } from "next-auth";

export const authOptions = {
  providers: [
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
    async signIn({ user, account, profile, email, credentials }: {user: string, email: string, account: string, profile: string, credentials: string}) {
      try{
        await dbConnect();
        let user = await User.findOne({ email });

        if(!user) {
          user = await User.create({username: profile.name, email: profile.email});
        }
      } catch (e) {
        console.log(e)
      }
      return true;
    }
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
