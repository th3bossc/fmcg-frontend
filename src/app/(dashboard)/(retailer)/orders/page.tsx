"use client";
import OrderCard from "@/components/OrderCard";
import { orderHistory } from "@/dummyData";

const Orders = () => {
    return (
        <div className="flex flex-col gap-4 w-full p-8 h-screen overflow-scroll ">
            <h1 className="font-bold text-3xl"> Previous Orders </h1>
            <hr className="w-full" />
            <div className="grid grid-cols-4 gap-4 h-full">
                {
                    orderHistory.map((order, index) => (
                        <OrderCard
                            key={index}
                            {...order}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Orders;