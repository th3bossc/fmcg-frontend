"use client";

import { useState } from "react";
import { StockOutData } from "@/types";
import { Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Step, StepLabel, Stepper } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { productData, routeData, orderData } from "@/dummyData";
import Card from "@/components/Card";

const Stockout = () => {
    const [formData, setFormData] = useState<StockOutData>({
        route: routeData[0],
        retailerName: "",
        product: productData[0],
        status: "accept",
        description: "",
    });
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        "Select Route & Product",
        "Complete the form",
    ]


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

    const acceptHandler = (index: number) => {

    }

    const rejectHandler = (index: number) => {
        orderData.splice(index, 1);
    }


    return (
        <div className="p-8 w-full relative flex flex-col items-center">
            <Stepper activeStep={activeStep} alternativeLabel className="w-full">
                {
                    steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
            <AnimatePresence>
                {activeStep === 0 && (
                    <motion.div
                        className="h-full flex flex-col items-center justify-center w-full"
                    >
                        <h1 className="font-bold"> Choose the route and the product </h1>
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
                                        <MenuItem key={index} value={index}>{route.routeName}</MenuItem>
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
                    </motion.div>
                )}
                {activeStep === 1 && (
                    <motion.div
                        className="h-full flex flex-wrap gap-4 mt-4 items-center justify-center w-full"
                    >
                        {
                            orderData.map((order, index) => (
                                <Card
                                    key={index}
                                    product={order.product}
                                    retailer={order.retailerName}
                                    required={order.required}
                                    location={order.location}
                                    reject={() => rejectHandler(index)}
                                    accept={() => acceptHandler(index)}
                                />
                            ))
                        }
                    </motion.div>
                )}
            </AnimatePresence>

            <ButtonGroup variant="outlined">
                <Button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => prev - 1)}
                >
                    Prev
                </Button>
                <Button
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep((prev) => prev + 1)}
                >
                    Next
                </Button>
            </ButtonGroup>
        </div>
    );
}

export default Stockout;