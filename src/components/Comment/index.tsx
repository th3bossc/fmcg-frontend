import Image from "next/image";
import profile from "/public/user.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

const Comment = ({
    header,
    text,
    //Todo: add link
}: {
    header: string;
    text: string;
}) => {

    return (
        <motion.div
            className="bg-neutral-900 p-2 rounded-sm w-full flex items-center justify-between relative pointer overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <Image src={profile} alt="profile" width={30} className="rounded-full" />
            <div className="flex flex-col gap-2 items-center justify-center">
                <span className="text-neutral-400 text-xs">{header}</span>
                <span className="text-neutral-200 text-sm" >{text}</span>
            </div>
            <span> &gt; </span>
        </motion.div>

    )
}

export default Comment;