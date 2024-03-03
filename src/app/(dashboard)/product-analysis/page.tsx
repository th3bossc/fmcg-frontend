"use client"

import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { routeData, productData } from "@/dummyData";
import { useState } from "react";
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
        <div className="p-8 w-full relative flex flex-col items-center">
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
            <Button size="small" variant="outlined" className="mt-4 font-semibold" onClick={getAnalytics}> View Data </Button>
            {
                analytics && (
                    <div className="mt-32 border border-1 border-neutral-600 w-96 h-32 flex flex-col gap-4 text-xs items-center justify-center">
                        <h1><strong>Consumption:</strong> {analytics.consumption}</h1>
                        <h1><strong>Demand:</strong> {analytics.demand}</h1>
                        ...other details
                    </div>
                )
            }
        </div>
    );
}

export default AnalysisPage;