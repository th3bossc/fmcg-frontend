"use client";

import { useAuthContext } from "@/AuthContext";
import RetailerCard from "@/components/RetailerCard";
import { getAllDistributors } from "@/lib/distributor";
import { getAllRetailers } from "@/lib/retailer";
import { User } from "@/types";
import { useEffect, useState } from "react";
// import { retailerData, distributorData } from "@/dummyData";

const ViewAll = () => {
    const [data, setData] = useState<User[]>([]);
    const { user } = useAuthContext();
    const userRole = user?.role;

    useEffect(() => {
        const fetchData = async () => {
            if (userRole === 'DISTRIBUTOR')
                setData(await getAllRetailers());
            else
                setData(await getAllDistributors());
        }

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="flex flex-col gap-4 w-full p-8 h-screen overflow-scroll ">
            <h1 className="font-bold text-3xl">{userRole === "DISTRIBUTOR" ? "Retailers" : "Distributors"}</h1>
            <hr className="w-full" />
            <div className="grid grid-cols-4 gap-4 h-full">
                {
                    data.map((user, index) => (
                        <div key={index} className="w-full h-full col-span-1">
                            <RetailerCard
                                {...user}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ViewAll;