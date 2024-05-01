import { Product } from "@/types";

const OrderStatus = ({
    product,
    deliveryDate,
}: {
    product: Product,
    deliveryDate: string,
}) => {
    return (
        <div className="border border-neutral-300 rounded-md p-2 text-md">
            <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Name: {product.name}</span>
                <span className="text-neutral-500">Expected Delivery: {deliveryDate}</span>
            </div>

            <div className="flex justify-between items-center bg-neutral-200 rounded-sm text-neutral-700" >
                <span className="p-2">Category: {product.category}</span>
                <span className="p-2">Demand: {product.demand}</span>
            </div>

        </div>
    )
}
export default OrderStatus;