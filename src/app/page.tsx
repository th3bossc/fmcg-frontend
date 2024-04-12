"use client";

import { permanentRedirect } from "next/navigation";

const Page = () => {
    permanentRedirect(`/login`)
}

export default Page;