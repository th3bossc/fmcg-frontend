"use client";

import { useEffect, useState } from "react";
import { Order, Product, StockOutData, Route } from "@/types";
import { Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Step, StepLabel, Stepper } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Card from "@/components/Card";
import { getProducts } from "@/lib/general";
import { useAuthContext } from "@/AuthContext";
import { getDemandDetails, getDemands } from "@/lib/distributor";

const Stockout = () => {
    const threshold = 1000;
    const { jwt, routes } = useAuthContext();
    const [productData, setProductData] = useState<Product[]>([]);
    const [routeData, setRouteData] = useState<Route[]>(routes);
    const [orderData, setOrderData] = useState<Order[]>([]);
    const [formData, setFormData] = useState<StockOutData>({
        route: routeData[0],
        retailerName: "",
        product: productData[0],
        status: "accept",
    });
    const [activeStep, setActiveStep] = useState(0);

    const [details, setDetails] = useState<{
        totalDemand: number,
        totalOrders: number
        totalPrice: number,
        cost: number,
    } | null>(null)
    const steps = [
        "Select Route & Product",
        "Choose the orders to accept/reject",
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




    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts();
            setProductData(products);
        }

        fetchData();
    }, [formData.product?.id, formData.route?.location, jwt]);


    useEffect(() => {
        const fetchData = async () => {
            const orders = await getDemands()
            setOrderData(
                orders?.filter(order => order.product.id === formData.product?.id && order.location === formData.route?.location) || []
            )
            const demandDetails = await getDemandDetails(jwt, formData.route?.id, formData.product?.id);
            setDetails(demandDetails || null);
        }
        activeStep === 1 && fetchData();

    }, [activeStep, formData.product?.id, formData.route, jwt])


    return (
        <div className="p-8 w-full relative flex flex-col items-center gap-4">
            <h1 className="font-bold text-3xl w-full">Live Demand</h1>
            <hr className="w-full" />
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
                        className="h-full flex gap-4 flex-col items-center justify-center w-full"
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
                                        <MenuItem key={index} value={index}>{route.location}</MenuItem>
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
                        className="h-full flex flex-col gap-4 mt-4 items-center justify-center w-full"
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <h1>Accepted Orders in the route:</h1>

                            {
                                !details?.totalOrders ? (
                                    <h1 className="font-medium text-neutral-600"> No data available for the selected combination... </h1>
                                ) : (
                                    <div className="w-full flex gap-2 flex-col">
                                        <div className="flex justify-between items-center w-full p-4 border border-1 border-neutral-600 gap-2">
                                            <span className="font-regular w-48"> <strong>Product:</strong> {formData.product?.name || ""} </span>
                                            <span className="font-regular w-48"> <strong>Deamnd:</strong> {details.totalDemand} </span>
                                            <span className="font-regular w-48"> <strong>No: of orders:</strong> {details.totalOrders}</span>
                                            <span className={"font-regular w-48 " + (details.totalPrice - details.cost > threshold ? "text-green-400" : "text-red-400")}> <strong>Profit Margin:</strong> {details.totalPrice - details.cost} </span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <hr className="w-full" />
                        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                            <h1>Pending Orders in the route:</h1>
                            <div className="w-full h-full flex items-center justify-center gap-4">
                                {
                                    !orderData.length && (
                                        <h1 className="font-medium text-neutral-600"> No pending orders in this route... </h1>
                                    )
                                }
                                {
                                    orderData.map((order, index) => (
                                        <Card
                                            key={index}
                                            id={order.id}
                                            product={order.product}
                                            retailer={order.retailer.name}
                                            required={order.required}
                                            location={order.location}
                                        />
                                    ))
                                }
                            </div>

                        </div>
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