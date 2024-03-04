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

                if (credentials.email === "Razik") {
                    const user = {
                        id: "1",
                        name: "Razik",
                        email: "john@example.com",
                        username: "johnDoe",
                        role: "distributor" as Role, // or "retailer"
                        randomKey: 12,
                    }
                    return user;
                }
                else if (credentials.email === "Lulu") {
                    const user = {
                        id: "2",
                        name: "Lulu Hypermarket",
                        email: "lulu@abc.com",
                        username: "Lulu",
                        role: "retailer" as Role,
                        randomKey: 13,
                    }
                    return user;
                }
                return null;
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                    role: u.role,
                }
            }
            return token;
        },
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: "asdf",
                    randomKey: token.randomKey,
                    role: token.role,
                }
            }
        },
    }
}