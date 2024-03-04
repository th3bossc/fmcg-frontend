"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { faUser, faUsers, faTowerBroadcast, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import { Role } from "@/types";
const Sidebar = () => {
    const { data } = useSession();
    const userRole: Role = (data?.user as any)?.role;
    const sidebarData = useMemo(() => {
        if (userRole === "distributor") {
            return [
                {
                    name: "Dashboard",
                    href: "/",
                    icon: faUser
                },
                {
                    name: "Inventory Tracker",
                    href: "/inventory",
                    icon: faProductHunt
                },
                {
                    name: "Retailers",
                    href: "/viewall",
                    icon: faUsers
                },
                {
                    name: "Live Demand",
                    href: "/stockout",
                    icon: faTowerBroadcast
                },
                {
                    name: "Product Analysis",
                    href: "/product-analysis",
                    icon: faMagnifyingGlass
                },
            ]
        }
        else {
            return [
                {
                    name: "Dashboard",
                    href: "/",
                    icon: faUser
                },
                {
                    name: "Pending Orders",
                    href: "/orders",
                    icon: faProductHunt
                },
                {
                    name: "Distributors",
                    href: "/viewall",
                    icon: faUsers
                },
                {
                    name: "Product Analysis",
                    href: "/product-analysis",
                    icon: faMagnifyingGlass
                },
            ]
        }

    }
        , [userRole])


    const pathname = usePathname();
    return (
        <motion.div
            className="bg-neutral-800 left-0 top-0 h-screen flex flex-col justify-center items-center relative w-[225px]"
        >
            <div className="flex flex-col gap-4 w-full">
                {
                    sidebarData.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="relative w-full"
                        >
                            <div className="flex gap-4 w-full items-center justify-start p-2 h-8 overflow-hidden text-neutral-400 hover:text-red-400">
                                <FontAwesomeIcon icon={item.icon} />
                                <motion.span
                                    className="text-sm truncate w-full text-right px-2"
                                >
                                    {item.name}
                                </motion.span>
                            </div>

                            {
                                item.href === pathname && (
                                    <motion.span
                                        className="bg-neutral-200 absolute z-10 right-0 top-0 h-full p-1 rounded-s-lg"
                                        layoutId="active"
                                    />
                                )
                            }
                        </Link>
                    ))
                }
            </div>
            <div className="absolute bottom-4">
                <Link className="text-semibold text-sm p-1 m-1 text-neutral-400 hover:text-blue-400 border border-1 border-neutral-500 hover:border-blue-500 rounded-sm" href="/profile">
                    View Profile
                </Link>
            </div>

        </motion.div>
    );
}

export default Sidebar;