"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faUser, faUsers, faCalendar, faMagnifyingGlass, faM } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {

    const sidebarData = useMemo(() => [
        {
            name: "Dashboard",
            href: "/",
            icon: faUser
        },
        {
            name: "Product Tracker",
            href: "/product-tracker",
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
            className="bg-neutral-800 left-0 top-0 h-screen flex justify-center items-center"
            onMouseOver={() => setOpen(true)}
            onMouseOut={() => setOpen(false)}
            initial="open"
            animate={open ? "open" : "close"}
            variants={{
                open: {
                    width: "250px"
                },
                close: {
                    width: "75px"
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
        </motion.div>
    );
}

export default Sidebar;