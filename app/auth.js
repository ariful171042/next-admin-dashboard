import NextAuth from "next-auth";
import CredentiialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const Login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("wrong credentials");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Gailed to login!");

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentiialsProvider({
      async authorize(credentials) {
        try {
          const user = await Login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
