"use client";

import { useAuthContext } from "@/AuthContext";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const { isLoggedIn } = useAuthContext();

    if (isLoggedIn)
        return router.push("/dashboard");
    return router.push("/login");
}

export default Page;