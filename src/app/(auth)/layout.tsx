import Image from "next/image";
import { ReactNode } from "react";
import loginImage from '/public/loginImage.jpeg';
export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="grid grid-cols-4 grid-rows-1 h-screen w-screen">
            <div className="row-start-1 row-span-1 col-start-1 col-span-2 flex flex-col justify-center items-center p-8">
                <Image src={loginImage} alt="something" className="w-full h-full object-cover rounded-xl opacity-70" />
            </div>
            <div className="row-start-1 row-span-1 col-start-3 col-span-2 flex justify-center items-center p-8  ">
                {children}
            </div>
        </div>
    );
}
