"use client";

import { User } from "@/types";
import profileImage from '/public/user.jpg';
import profileBg from '/public/blob-scene-haikei.svg';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuthContext } from "@/AuthContext";

const Profile = () => {
    const { user, logOut } = useAuthContext();
    const router = useRouter();
    return (
        <div className="p-8 w-full relative flex flex-col gap-4 items-center">
            <h1 className="text-3xl font-bold w-full">Profile</h1>
            <hr className="w-full" />
            <div className="h-full w-full flex items-center justify-center">
                <div className="w-full h-full lg:w-[900px] lg:h-[500px] bg-[#d2d2d2] rounded-lg text-black p-10 pt-32 xl:p-10 relative overflow-hidden z-10">
                    <div className="absolute top-0 left-0 w-full h-full -z-10" >
                        <Image src={profileBg} alt="profile-bg" />
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src={profileImage} alt="profile-image" className=" object-cover rounded-full" height={50} width={50} />
                        <div className="text-lg lg:text-2xl">
                            <span className="font-medium">
                                Name: &nbsp;
                            </span>
                            <span className={`font-bold text-nitconfprimary`}>
                                {user?.name || 'N/A'}
                            </span>
                        </div>
                    </div>
                    <span className="block w-full p-[0.05rem] my-4 rounded-sm bg-black" />
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="text-lg lg:text-2xl flex items-center gap-1">
                            <span className="text-lg lg:text-2xl font-medium">
                                User ID: &nbsp;
                            </span>
                            <span className={`text-lg lg:text-2xl font-bold text-nitconfprimary`}>
                                {user?.id || 'N/A'}
                            </span>
                        </div>

                        <div className="text-lg lg:text-2xl flex items-center gap-1">
                            <span className="font-medium">
                                Email: &nbsp;
                            </span>
                            <span className={`font-bold text-nitconfprimary`}>
                                {user?.email || 'N/A'}
                            </span>
                        </div>

                        <div className="text-lg lg:text-2xl  flex items-center gap-1">
                            <span className="font-medium">
                                Role: &nbsp;
                            </span>
                            <span className={`font-bold text-nitconfprimary`}>
                                {user?.role || 'N/A'}
                            </span>
                        </div>

                        <div className="text-lg lg:text-2xl  flex items-center gap-1">
                            <span className="font-medium">
                                Address: &nbsp;
                            </span>
                            <span className={`font-bold text-nitconfprimary`}>
                                {/* {user?.address || 'N/A'} */}
                                N/A
                            </span>
                        </div>
                        <div className="text-lg lg:text-2xl  flex items-center gap-1">
                            <span className="font-medium">
                                contact: &nbsp;
                            </span>
                            <span className={`font-bold text-nitconfprimary`}>
                                {user?.contact || 'N/A'}
                            </span>
                        </div>

                    </div>
                    <div className={`text-lg lg:text-2xl mt-16 lg:m-0 flex lg:block gap-2 lg:absolute bottom-8 right-8 p-1 rounded-md hover:bg-indigo-500 hover:text-white bg-neutral-300 items-center justify-center`}>
                        <button onClick={() => logOut()}>
                            <span className="font-medium text-center text-lg lg:text-2xl">
                                Logout
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;