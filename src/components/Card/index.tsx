import { useAuthContext } from "@/AuthContext";
import { acceptOrder, rejectOrder } from "@/lib/distributor";
import { Product } from "@/types";
import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

const Card = ({ id, product, retailer, required, location }: {
    id: string,
    product: Product,
    retailer: string,
    required: number,
    location: string
}) => {
    const { jwt } = useAuthContext();
    const [days, setDays] = useState("");

    const acceptHandler = () => {
        if (!days || isNaN(+days))
            alert("Please enter a valid number of days");
        console.log("acepted");
        acceptOrder(jwt, id, +days);
    }

    const rejectHandler = () => {
        rejectOrder(jwt, id);
    }
    return (
        <div className="w-[15rem] h-[15rem] border border-1 border-neutral-600 bg-neutral-900 rounded-lg flex flex-col justify-between items-center">
            <div className="w-full flex items-center justify-center p-4">
                <h1 className="text-xl text-white">{retailer}</h1>
            </div>
            <div className="w-full flex flex-col items-center justify-center p-4">
                <h1 className="text-white text-sm">Product: {product.name}</h1>
                <h1 className="text-white text-sm">Required: {required}</h1>
                <h1 className="text-white text-sm">Location: {location}</h1>
            </div>
            <input type="text" className="p-2 rounded-lg w-3/4 bg-neutral-800" placeholder="expected time to delivery.." name="days" value={days} onChange={(e) => setDays(e.target.value)} />
            <div className="flex gap-2 items-center justify-center p-2">
                <Button color="success" onClick={acceptHandler} className="w-full font-semibold" size="small">Accept</Button>
                <Button color="error" onClick={rejectHandler} className="w-full font-semibold" size="small">Reject</Button>
            </div>
        </div>
    )
}

export default Card;