"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const { data } = useSession();
    const userRole = (data?.user as any)?.role;
    const router = useRouter();
    if (userRole !== "distributor")
        router.push("/");
    return (
        <>
            {children}
        </>
    )
}

export default Layout;