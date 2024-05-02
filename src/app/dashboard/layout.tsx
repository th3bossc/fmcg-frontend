"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="flex gap-2">
            <Sidebar />
            {children}
        </div>
    );
}