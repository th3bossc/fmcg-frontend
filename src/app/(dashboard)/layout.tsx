"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import { signIn, useSession } from "next-auth/react";
export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    const { status } = useSession();
    if (status === "unauthenticated")
        signIn()
    else if (status === "loading")
        return (
            <main className="grid grid-cols-3 grid-rows-6 p-4 w-full h-screen gap-2">
                <div className="rounded-sm row-start-1 row-span-6 col-start-1 col-span-3 w-full flex items-center justify-center">
                    <span className="text-4xl font-bold">Loading...</span>
                </div>
            </main>
        )
    return (
        <div className="flex gap-2">
            <Sidebar />
            {children}
        </div>
    );
}