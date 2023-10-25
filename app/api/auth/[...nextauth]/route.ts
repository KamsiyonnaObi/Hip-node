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
      const { name, email, image } = profile.user
      const { given_name } = profile.profile

      try{
        await dbConnect();
        let user = await UserModel.findOne({ email });

        if(!user) {
          user = await UserModel.create({username: name, fullName: given_name, profileImage: image, email});
        }
      } catch (e) {
        console.error("Sign-in error:", e);
      }
      console.log(profile)

      return true;
    }
  },
};

export const handler = NextAuth(authOptions as any);

export { handler as GET, handler as POST };
