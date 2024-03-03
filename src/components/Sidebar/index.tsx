"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faUser, faUsers, faCalendar, faMagnifyingGlass, faM } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const Sidebar = () => {
    const router = useRouter();
    const sidebarData = useMemo(() => [
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
            href: "/retailers",
            icon: faUsers
        },
        {
            name: "Delivery Dates",
            href: "/delivery-dates",
            icon: faCalendar
        },
        {
            name: "Product Analysis",
            href: "/product-analysis",
            icon: faMagnifyingGlass
        },
    ], [])


    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    return (
        <motion.div
            className="bg-neutral-800 left-0 top-0 h-screen flex justify-center items-center relative"
            onMouseOver={() => setOpen(true)}
            onMouseOut={() => setOpen(false)}
            initial="open"
            animate={open ? "open" : "close"}
            variants={{
                open: {
                    width: "250px"
                },
                close: {
                    width: "100px"
                }
            }}
        >
            <div className="flex flex-col gap-4 w-full">
                {
                    sidebarData.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="relative w-full"
                            style={{
                                width: open ? "250px" : "100px"
                            }}
                        >
                            <div className="flex gap-4 w-full items-center justify-start p-2 h-8 overflow-hidden text-neutral-400 hover:text-red-400">
                                <FontAwesomeIcon icon={item.icon} />
                                <AnimatePresence>
                                    {
                                        open &&
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: [0, 0.3, 1] }}
                                            exit={{ opacity: 0 }}
                                            className="text-sm truncate"
                                        >
                                            {item.name}
                                        </motion.span>
                                    }
                                </AnimatePresence>
                            </div>

                            {
                                item.href === pathname && (
                                    <motion.span
                                        className="bg-neutral-200 absolute z-10 right-0 top-0 h-full p-2 rounded-s-lg"
                                        layoutId="active"
                                    />
                                )
                            }
                        </Link>
                    ))
                }
            </div>
            <div className="absolute left-0 bottom-0 w-full">
                <button className="text-semibold text-sm m-2 p-1 rounded-md bg-red-900 hover:bg-red-400 hover:text-black" onClick={() => signOut() || router.push("/login")}>
                    Sign out
                </button>
            </div>

        </motion.div>
    );
}

export default Sidebar;