import { useAuthContext } from "@/AuthContext"
import { getProducts } from "@/lib/general"
import { createOrder } from "@/lib/retailer"
import { Order, Product, Route } from "@/types"
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

const NewOrder = ({
    closeHandler,
    setOrderHistory,
}: {
    closeHandler: () => void,
    setOrderHistory: Dispatch<SetStateAction<Order[]>>,
}) => {
    const { jwt } = useAuthContext();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setProducts(data);
            setFormData(prev => ({
                ...prev, product: data[0]
            }))
        }

        fetchData();
    }, [])


    const [formData, setFormData] = useState<{
        product: Product,
        required: string,
    }>({
        product: products[0],
        required: "",
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const updatedData = await createOrder(jwt, formData);
            setOrderHistory(updatedData);
            closeHandler();
        }
        catch (err) {
            console.error(err);
        }
    }

    // const handleRouteChange = (e: SelectChangeEvent) => {
    //     setFormData({
    //         ...formData,
    //         route: routes[+(e.target.value)]
    //     });
    // }

    const handleProductChange = (e: SelectChangeEvent) => {
        setFormData({
            ...formData,
            product: products[+(e.target.value)]
        });
    }


    return (
        < div className="w-[600px] h-[600px] bg-neutral-800 rounded-lg relative" >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 absolute top-4 right-4 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={closeHandler}
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <form className="w-full h-full p-4 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                <h1 className="w-full p-2 text-center text-xl"> Add a new Product to your inventory </h1>
                {/* <FormControl className="w-96 mt-4 text-white">
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
                </FormControl> */}
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
                <input
                    type="text"
                    name="required"
                    value={formData.required}
                    placeholder="Enter required amount"
                    className="w-96 h-10 border-2 border-gray-800 rounded-md p-2 mt-4 bg-neutral-900"
                    onChange={handleChange}
                />
                <button type="submit" className="w-96 h-10 p-1 mt-4 bg-red-900 hover:bg-red-300 hover:text-black"> Submit </button>
            </form>
        </div >
    )
}

export default NewOrder;