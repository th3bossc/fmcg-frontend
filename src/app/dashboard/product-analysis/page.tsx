"use client"

import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
// import { recieptData } from "@/dummyData";
import { useEffect, useState } from "react";
import Image from "next/image";
import graph from "/public/graph.jpg";
import graph2 from '/public/graph2.png';
import graph3 from '/public/graph3.png';
import { useAuthContext } from "@/AuthContext";
import { getProducts } from "@/lib/general";
import { Product, Receipt } from "@/types";
import { getDistributorReceipts } from "@/lib/distributor";
import { getRetailerReceipts } from "@/lib/retailer";

const AnalysisPage = () => {

    const { jwt, routes, user } = useAuthContext();
    const [products, setProducts] = useState<Product[]>([])
    const [recieptData, setRecieptData] = useState<Receipt[]>([]);

    const [analytics, setAnalytics] = useState<{
        consumption: number,
        demand: "low" | "medium" | "high",
    } | null>(null)

    const [formData, setFormData] = useState({
        route: routes[0],
        product: products[0],
    });

    const handleRouteChange = (e: SelectChangeEvent) => {
        setFormData({
            ...formData,
            route: routes[+(e.target.value)]
        });
    }

    const handleProductChange = (e: SelectChangeEvent) => {
        setFormData({
            ...formData,
            product: products[+(e.target.value)]
        });
    }

    const getAnalytics = async () => {
        setAnalytics({
            consumption: Math.floor(Math.random() * 100),
            demand: "low"
        })
        let recieptData: Receipt[] = [];
        if (user?.role === "DISTRIBUTOR")
            recieptData = await getDistributorReceipts(jwt) || [];
        else if (user?.role === "RETAILER")
            recieptData = await getRetailerReceipts(jwt);
        setRecieptData(recieptData?.filter(reciept => reciept.product.id === formData.product.id) || []);
    }

    useEffect(() => {
        const fetchData = async () => {
            const productsData = await getProducts()
            setProducts(productsData)
        }

        fetchData()
    }, [jwt])



    return (
        <div className="p-8 w-full relative flex flex-col gap-4 items-center h-screen overflow-scroll">
            <h1 className="text-3xl font-bold w-full">Product Analysis</h1>
            <hr className="w-full" />
            <div className="flex gap-2 mt-4 items-center justify-center">
                <FormControl className="w-96 mt-4 text-white">
                    <InputLabel id="route-select-label">Route</InputLabel>
                    <Select
                        labelId="route-select-label"
                        value={formData?.route ? routes.indexOf(formData.route).toString() : "0"}
                        label="route"
                        onChange={handleRouteChange}
                    >
                        {
                            routes.map((route, index) => (
                                <MenuItem key={index} value={index}>{route.location}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl className="w-96 mt-4 text-white">
                    <InputLabel id="product-select-label">Product</InputLabel>
                    <Select
                        labelId="product-select-label"
                        value={formData?.product ? products.indexOf(formData.product).toString() : "0"}
                        label="route"
                        onChange={handleProductChange}
                    >
                        {
                            products.map((product, index) => (
                                <MenuItem key={index} value={index}>{product.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </div>
            <div className="mt-4">
                <Button size="small" variant="outlined" className="font-semibold" onClick={getAnalytics}> View Data </Button>
            </div>
            {
                recieptData.length ? (
                    <div className=" mt-4 h-full">
                        <h1 className="font-semibold mb-4 text-center"> Order receipts </h1>

                        <div className="h-full w-full flex gap-2 flex-col">
                            {
                                recieptData.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center w-full p-4 border border-1 border-neutral-600 gap-2">
                                        <span className="font-regular w-48"> <strong>Product:</strong> {item.product.name} </span>
                                        <span className="font-regular w-48"> <strong>Retailer:</strong> {item.retailer.name} </span>
                                        <span className="font-regular w-48"> <strong>Brand:</strong> {item.product.brand}</span>
                                        <span className="font-regular w-48"> <strong>Demand:</strong> {item.product.demand} </span>
                                        <div>
                                            <p className={`text-white rounded-lg w-32 p-2 text-center capitalize ${item.accepted ? "bg-green-900" : "bg-red-900"}`}> {item.accepted ? "accepted" : "rejected"}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="h-full flex gap-2 w-full grid grid-cols-3">
                                <Image src={graph2} alt="something" className="rounded-lg object-fit-cover w-full h-full" />
                                <Image src={graph} alt="something" className="rounded-lg object-fit-cover w-full h-full" />
                                <Image src={graph3} alt="something" className="rounded-lg object-fit-cover w-full h-full" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <span className="w-full h-full flex justify-center items-center text-neutral-600 text-xl">
                        Choose a product and a route to view the analytics
                    </span>
                )
            }
        </div>
    );
}

export default AnalysisPage;