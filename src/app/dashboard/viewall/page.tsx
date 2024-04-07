"use client";

import { useAuthContext } from "@/AuthContext";
import RetailerCard from "@/components/RetailerCard";
import { retailerData, distributorData } from "@/dummyData";
import { Role } from "@/types";

const ViewAll = () => {
    const { user } = useAuthContext();
    const userRole = user?.role;
    return (
        <div className="flex flex-col gap-4 w-full p-8 h-screen overflow-scroll ">
            <h1 className="font-bold text-3xl">{userRole === "DISTRIBUTOR" ? "Retailers" : "Distributors"}</h1>
            <hr className="w-full" />
            <div className="grid grid-cols-4 gap-4 h-full">
                {
                    userRole === "DISTRIBUTOR"
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