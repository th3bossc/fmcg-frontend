"use client";

import { useAuthContext } from "@/AuthContext";
import NewProduct from "@/components/NewProduct";
import { getDistributorReceipts } from "@/lib/distributor";
import { Receipt } from "@/types";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const InventoryTracker = () => {
    const [receipts, setReceipts] = useState<Receipt[]>([]);
    const [addProduct, setAddProduct] = useState(false);
    const { jwt } = useAuthContext()
    useEffect(() => {
        const fetchData = async () => {
            const data = await getDistributorReceipts(jwt);
            setReceipts(data ? data : []);
        }

        fetchData()
    }, [jwt])

    return (
        <div className="w-full h-screen flex flex-col gap-4 justify-center items-center p-8">
            <div className="flex justify-between items-center w-full">
                <h1 className="font-bold text-3xl">Inventory Tracker</h1>
                <Button variant="outlined" onClick={() => setAddProduct(true)}> Add Product </Button>
            </div>
            <AnimatePresence>
                {
                    addProduct && (
                        <motion.div
                            className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <NewProduct
                                closeHandler={() => setAddProduct(false)}
                            />
                        </motion.div>
                    )
                }
            </AnimatePresence>
            <hr className="w-full" />
            <div className="w-full mt-4 h-full">
                <h1 className="font-semibold mb-4 text-xl text-center"> Order receipts </h1>
                <div className="h-full w-full flex gap-2 flex-col">
                    {
                        receipts.map((item, index) => (
                            <div key={index} className="flex justify-between items-center w-full p-4 border border-1 border-neutral-600 gap-2">
                                <span className="font-regular w-48"> <strong>Product:</strong> {item.product.name} </span>
                                <span className="font-regular w-48"> <strong>Retailer:</strong> {item.retailer.name} </span>
                                <span className="font-regular w-48"> <strong>Brand:</strong> {item.product.brand}</span>
                                <span className="font-regular w-48"> <strong>Demand:</strong> {item.product.demand} </span>
                                <div>
                                    <p className={`text-white rounded-lg w-32 p-2 text-center capitalize ${item.accepted ? "bg-green-900" : "bg-red-900"}`}> {item.accepted ? "Accepted" : "Rejected"} </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default InventoryTracker;