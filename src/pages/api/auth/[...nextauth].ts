import NextAuth from "next-auth"
import Provider from "next-auth/providers"

export default NextAuth({
  providers: [
    Provider.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope:'read:user'
    }),
  ],
})

