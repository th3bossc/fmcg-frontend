import { Order } from "@/types";

const OrderCard = ({ product, required, location, status, accepted_by }: Order) => {
    console.log(product, required, location, status, accepted_by)
    return (
        <div className="h-full w-full border border-1 border-neutral-600 bg-neutral-900 rounded-lg flex flex-col justify-between items-center">
            <div className="w-full flex flex-col items-center justify-center p-4 h-full">
                <h1 className="text-white text-sm">Product: {product.name}</h1>
                <h1 className="text-white text-sm">Required: {required}</h1>
                <h1 className="text-white text-sm">Location: {location}</h1>
            </div>
            <div className="flex gap-2 items-center justify-between w-full p-2">
                <span className="text-white text-sm rounded-md p-2" style={{
                    backgroundColor: status === "ACCEPTED" ? "green" : status === "REJECTED" ? "red" : "gray"
                }}>Accepted: {status === "ACCEPTED" ? "Yes" : "No"}</span>
                {
                    status === "ACCEPTED" ? (
                        <span className="text-neutral-600 text-xs">Accepted By: {accepted_by?.name || ""}</span>
                    ) : (
                        status === "REJECTED" ? (
                            <span className="text-neutral-600 text-xs">Rejected By: {accepted_by?.name || ""}</span>
                        ) : (
                            <span className="text-neutral-600 text-xs">Pending Confirmation</span>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default OrderCard;