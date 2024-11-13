import { prismaClient } from "@/app/lib/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) {
        return false; // Return false if no email is found, preventing sign-in
      }

      try {
        // Check if user already exists in the database to avoid duplicates
        const existingUser = await prismaClient.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          // Create a new user in the database
          await prismaClient.user.create({
            data: { 
              email: user.email,
              provider: "Google",
            },
          });
        }
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false; // Return false if there's an error
      }
      return true; // Sign-in allowed if everything is successful
    },
  },
});

export { handler as GET, handler as POST };
