"use client";
import { useAuthContext } from "@/AuthContext";
import NewOrder from "@/components/NewOrder";
import OrderCard from "@/components/OrderCard";
import { getOrders } from "@/lib/retailer";
import { Order } from "@/types";
import Button from "@mui/material/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Orders = () => {
    const [orderHistory, setOrderHisory] = useState<Order[]>([]);
    const [createOrder, setCreateOrder] = useState(false);
    const { jwt } = useAuthContext();
    useEffect(() => {
        const getData = async () => {
            const data = await getOrders(jwt);
            setOrderHisory(data || []);
        }
        getData();
    }, [jwt])


    return (
        <div className="flex flex-col gap-4 w-full p-8 h-screen overflow-scroll ">
            <div className="flex justify-between items-center w-full">
                <h1 className="font-bold text-3xl">Inventory Tracker</h1>
                <Button variant="outlined" onClick={() => setCreateOrder(true)}> Create Order </Button>
            </div>
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
            <AnimatePresence>
                {
                    createOrder && (
                        <motion.div
                            className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <NewOrder
                                closeHandler={() => setCreateOrder(false)}
                                setOrderHistory={setOrderHisory}
                            />
                        </motion.div>
                    )

                }
            </AnimatePresence>
        </div>
    )
}

export default Orders;