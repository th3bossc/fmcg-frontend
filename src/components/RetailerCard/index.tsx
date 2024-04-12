"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { User } from "@/types";

const RetailerCard = ({
    name,
    logo,
    contact,
    address,
    website,
}: User) => {
    return (
        <div className="relative h-full w-full border border-1 border-neutral-600 bg-neutral-900 rounded-lg flex flex-col justify-between items-center overflow-hidden">
            <div className="w-full flex flex-col items-center justify-center p-4">
                <Image src={logo || "/user.jpg"} alt={name} width={100} height={100} className="rounded-full" />
                <h1 className="text-xl text-white mt-2 font-bold">{name}</h1>
            </div>
            <div className="w-full flex flex-col items-center justify-center p-4">
                <h1 className="text-neutral-400 text-xs">Contact: {contact}</h1>
                <h1 className="text-neutral-400 text-xs">Address: {address}</h1>
            </div>
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-neutral-900 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: "-45deg", opacity: [0, 0.8, 1] }}
                initial={{ opacity: 0 }}
                transition={{
                    duration: 0.1,
                }}

            >
                <Link className="bg-primary-500 text-white p-2" href={website || "google.com"} target="_blank">
                    <FontAwesomeIcon icon={faArrowRight} size="xl" />
                </Link>
            </motion.div>
        </div>
    )
}

export default RetailerCard;