import { motion } from "framer-motion";
import { useState } from "react";

const Link = ({
    title,
}: {
    title: string
}) => {

    return (
        <motion.div
            className="bg-neutral-900 p-2 rounded-sm w-full flex items-center justify-between relative pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <span className="text-neutral-400 text-xs w-1/3">{title}</span>
            <span> &gt; </span>
        </motion.div>

    )
}

export default Link;