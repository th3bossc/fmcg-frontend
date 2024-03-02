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
    const [hover, setHover] = useState(false);

    return (
        <div
            className="bg-neutral-900 p-2 rounded-sm w-full flex items-center justify-between relative pointer overflow-hidden"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image src={profile} alt="profile" width={30} className="rounded-full" />
            <div className="flex flex-col gap-2 items-center justify-center">
                <span className="text-neutral-400 text-xs">{header}</span>
                <span className="text-neutral-200 text-sm" >{text}</span>
            </div>
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

export default Comment;