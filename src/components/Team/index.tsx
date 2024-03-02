import Image from 'next/image';
import profile from '/public/user.jpg';
import linkedinLogo from '/public/linkedin.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';
const Team = ({
    name,
    role,
    linkedin,
}: {
    name: string;
    role: string;
    linkedin: string;
}) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            className="bg-neutral-900 p-2 rounded-sm w-full flex flex-col items-center justify-center gap-2 text-center relative pointer"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image src={profile} alt="profile" width={30} className="rounded-full" />
            <span className="text-neutral-200 font-medium text-xs w-1/3">{name}</span>
            <span className="text-neutral-400 text-[0.5rem]">{role}</span>
            <motion.a
                className="absolute left-0 bottom-0 w-full h-full flex items-center justify-center bg-neutral-200 text-black rounded-sm"
                initial={{ height: '0%', opacity: 0 }}
                animate={{ height: hover ? '100%' : '0%', opacity: hover ? 1 : 0 }}
                transition={{ duration: 0.2, type: 'tween' }}
                href={linkedin}
            >

                <Image src={linkedinLogo} alt="linkedin" width={30} className="rounded-full" />
            </motion.a>
        </div>
    )
}

export default Team;