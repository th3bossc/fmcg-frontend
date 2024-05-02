import Image from "next/image";
import profile from "/public/user.jpg";
import { motion } from "framer-motion";
import { Comment as CommentInterface } from "@/types";
import { useRouter } from "next/navigation";

const Comment = ({
    header,
    text,
    link,
}: CommentInterface) => {
    const router = useRouter();
    return (
        <motion.button
            className="block bg-neutral-900 p-2 rounded-sm w-full flex items-center justify-between relative pointer overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(link || "#")}
        >
            <Image src={profile} alt="profile" width={30} className="rounded-full" />
            <div className="flex flex-col gap-2 items-center justify-center">
                <span className="text-neutral-400 text-xs">{header}</span>
                <span className="text-neutral-200 text-sm" >{text}</span>
            </div>
            <span> &gt; </span>
        </motion.button>

    )
}

export default Comment;