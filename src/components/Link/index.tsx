import { motion } from "framer-motion";
import { useState } from "react";

const Link = ({
    title,
}: {
    title: string
}) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="bg-neutral-900 p-2 rounded-sm w-full flex items-center justify-between relative pointer"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span className="text-neutral-400 text-xs w-1/3">{title}</span>
            <span> &gt; </span>
            <motion.span
                className="absolute left-0 bottom-0 w-full h-full flex items-center justify-center bg-neutral-200 text-black rounded-sm"
                initial={{ width: '0%', opacity: 0 }}
                animate={{ width: hover ? '100%' : '0%', opacity: hover ? 1 : 0 }}
                transition={{ duration: 0.2, type: 'tween' }}
            >
                &rarr;
                {/* Todo: add link */}
            </motion.span>
        </div>

    )
}

export default Link;