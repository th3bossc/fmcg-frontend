"use client";

import RetailerCard from "@/components/RetailerCard";
import { retailerData, distributorData } from "@/dummyData";
import { Role } from "@/types";
import { useSession } from "next-auth/react";

const ViewAll = () => {
    const { data } = useSession();
    const userRole: Role = (data?.user as any)?.role;
    return (
        <div className="flex flex-col gap-4 w-full p-8 h-screen overflow-scroll ">
            <h1 className="font-bold text-3xl">{userRole === "distributor" ? "Retailers" : "Distributors"}</h1>
            <hr className="w-full" />
            <div className="grid grid-cols-4 gap-4 h-full">
                {
                    userRole === "distributor"
                        ? retailerData.map((retailer, index) => (
                            <div key={index} className="w-full h-full col-span-1">
                                <RetailerCard
                                    {...retailer}
                                />
                            </div>
                        ))
                        : distributorData.map((distributor, index) => (
                            <div key={index} className="w-full h-full col-span-1">
                                <RetailerCard
                                    {...distributor}
                                />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default ViewAll;