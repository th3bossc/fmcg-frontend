import { Product } from "@/types";

const OrderCard = ({ product, required, location, accepted, acceptedBy }: {
    product: Product,
    required: number,
    location: string,
    accepted: boolean,
    acceptedBy?: string,
}) => {
    return (
        <div className="h-full w-full border border-1 border-neutral-600 bg-neutral-900 rounded-lg flex flex-col justify-between items-center">
            <div className="w-full flex flex-col items-center justify-center p-4 h-full">
                <h1 className="text-white text-sm">Product: {product.name}</h1>
                <h1 className="text-white text-sm">Required: {required}</h1>
                <h1 className="text-white text-sm">Location: {location}</h1>
            </div>
            <div className="flex gap-2 items-center justify-between w-full p-2">
                <span className="text-white text-sm rounded-md p-2" style={{
                    backgroundColor: accepted ? "green" : "red"
                }}>Accepted: {accepted ? "Yes" : "No"}</span>
                {
                    accepted ? (
                        <span className="text-neutral-600 text-xs">Accepted By: {acceptedBy}</span>
                    ) : (
                        <span className="text-neutral-600 text-xs">Pending Confirmation</span>
                    )
                }
            </div>
        </div>
    )
}

export default OrderCard;