import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { User, Role } from '@/types';

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                // name: {
                //     label: "Full name",
                //     type: "text",
                //     placeholder: "John Doe",
                // },
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "john@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                },
                // role: {
                //     label: "Role",
                //     type: "select",
                //     options: ["distributor", "retailer"]
                // }
            },
            authorize: async (credentials): Promise<User | null> => {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = {
                    id: "1",
                    name: "John Doe",
                    email: "john@example.com",
                    username: "johnDoe",
                    role: "distributor" as Role, // or "retailer"
                    randomKey: 12,
                }
                return user;
            }
        })
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey,
                }
            }
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                }
            }
            return token;
        }
    }
}