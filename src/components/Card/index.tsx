import { Product } from "@/types";
import { Button } from "@mui/material";

const Card = ({ product, retailer, required, location, accept, reject }: {
    product: Product,
    retailer: string,
    required: number,
    location: string
    accept: () => void
    reject: () => void
}) => {
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
            <div className="flex gap-2 items-center justify-center p-2">
                <Button color="success" onClick={accept} className="w-full font-semibold" size="small">Accept</Button>
                <Button color="error" onClick={reject} className="w-full font-semibold" size="small">Reject</Button>
            </div>
        </div>
    )
}

export default Card;