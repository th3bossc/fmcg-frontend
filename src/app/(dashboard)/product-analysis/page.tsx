"use client"

import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { routeData, productData, recieptData } from "@/dummyData";
import { useState } from "react";
import Image from "next/image";
import graph from "/public/graph.jpg";

const AnalysisPage = () => {
    const [analytics, setAnalytics] = useState<{
        consumption: number,
        demand: "low" | "medium" | "high",
    } | null>(null)

    const [formData, setFormData] = useState({
        route: routeData[0],
        product: productData[0],
    });

    const handleRouteChange = (e: SelectChangeEvent) => {
        setFormData({
            ...formData,
            route: routeData[+(e.target.value)]
        });
    }

    const handleProductChange = (e: SelectChangeEvent) => {
        setFormData({
            ...formData,
            product: productData[+(e.target.value)]
        });
    }

    const getAnalytics = () => {
        setAnalytics({
            consumption: Math.floor(100 * (Math.random() % 1000)),
            demand: Math.floor(3 * Math.random() % 3) === 0 ? "low" : Math.floor(3 * Math.random() % 3) === 1 ? "medium" : "high",
        })
    }

    return (
        <div className="p-8 w-full relative flex flex-col items-center h-screen overflow-scroll">
            <h1>Product Analysis</h1>
            <div className="flex gap-2 mt-4 items-center justify-center">
                <FormControl className="w-96 mt-4 text-white">
                    <InputLabel id="route-select-label">Route</InputLabel>
                    <Select
                        labelId="route-select-label"
                        value={formData?.route ? routeData.indexOf(formData.route).toString() : "0"}
                        label="route"
                        onChange={handleRouteChange}
                    >
                        {
                            routeData.map((route, index) => (
                                <MenuItem key={index} value={index}>{route.destination}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl className="w-96 mt-4 text-white">
                    <InputLabel id="product-select-label">Product</InputLabel>
                    <Select
                        labelId="product-select-label"
                        value={formData?.product ? productData.indexOf(formData.product).toString() : "0"}
                        label="route"
                        onChange={handleProductChange}
                    >
                        {
                            productData.map((product, index) => (
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
                analytics && (
                    <div className="w-full mt-4 h-full">
                        <h1 className="font-semibold mb-4 text-center"> Order receipts </h1>

                        <div className="h-full w-full flex gap-2 flex-col">
                            {
                                recieptData.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center w-full p-4 border border-1 border-neutral-600 gap-2">
                                        <span className="font-regular w-48"> <strong>Product:</strong> {item.product.name} </span>
                                        <span className="font-regular w-48"> <strong>Retailer:</strong> {item.retailerName} </span>
                                        <span className="font-regular w-48"> <strong>Brand:</strong> {item.product.brand}</span>
                                        <span className="font-regular w-48"> <strong>Demand:</strong> {Math.floor(100 * Math.random())} </span>
                                        <div>
                                            <p className={`text-white rounded-lg w-32 p-2 text-center capitalize ${item.status === "accept" ? "bg-green-900" : "bg-red-900"}`}> {item.status}ed </p>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="h-full items-center justify-center flex gap-2 flex-col">
                                <Image src={graph} alt="something" className="w-full h-full" />
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
}

export default AnalysisPage;