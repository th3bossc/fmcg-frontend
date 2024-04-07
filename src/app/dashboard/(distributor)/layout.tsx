"use client";

import { useAuthContext } from "@/AuthContext";
import { useRouter } from "next/navigation";


const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const { user } = useAuthContext();
    const router = useRouter();
    if (user?.role !== "DISTRIBUTOR")
        return router.push("/dashboard");
    return (
        <>
            {children}
        </>
    )
}

export default Layout;