import dbConnect from "@/utils/mongooseConnect";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import UserModel from "@/models/User";

interface Profile {
  email: string;
  fullName: string;
  username: string;
  [key: string]: any;
}  

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
    async signIn( profile: Profile) {

      try{
        await dbConnect();
        let user = await UserModel.findOne({ email: profile.email });

        if(!user) {
          user = await UserModel.create({username: profile.username, fullName: profile.fullName, email: profile.email});
        }
      } catch (e) {
        console.log(e)
      }
      console.log(profile)

      return true;
    }
  },
};

export const handler = NextAuth(authOptions as any);

export { handler as GET, handler as POST };
