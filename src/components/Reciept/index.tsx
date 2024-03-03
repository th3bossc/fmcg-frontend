import { Product, Route } from "@/types"
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reciept = ({
    route,
    product,
    retailerName,
    status,
    description,
    close,
}: {
    route: Route | null,
    product: Product | null,
    retailerName: string,
    status: "accept" | "reject",
    description: string,
    close: () => void,
}) => {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 backdrop-blur-xl z-10 flex items-center justify-center">
            <div className="w-1/3 h-2/3 bg-neutral-400 rounded-md flex flex-col relative">
                <h1 className="p-8 text-black font-bold text-3xl text-center"> Order Receipt </h1>
                <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-8">
                    <div className="flex justify-between w-full text-black">
                        <h2 className="font-bold" >Retailer: </h2>
                        <span>{retailerName}</span>
                    </div>
                    <div className="flex justify-between w-full text-black">
                        <h2 className="font-bold" >Route: </h2>
                        <span>{route?.routeName}</span>
                    </div>
                    <div className="flex justify-between w-full text-black">
                        <h2 className="font-bold" >Product Category: </h2>
                        <span>{product?.category}</span>
                    </div>
                    <div className="flex justify-between w-full text-black">
                        <h2 className="font-bold" >Product Brand: </h2>
                        <span>{product?.brand}</span>
                    </div>
                    <div className="flex justify-between w-full text-black">
                        <h2 className="font-bold" >Demand: </h2>
                        <span>{product?.demand}</span>
                    </div>
                    <div className="flex justify-between w-full text-black">
                        <h2 className="font-bold" >Product Priority: </h2>
                        <span>{product?.priority}</span>
                    </div>
                    <div className="flex justify-between w-full text-black">
                        <h2 className="font-bold">Order Status:</h2>
                        <span>{status}</span>
                    </div>
                </div>
                <span className="absolute top-2 right-2 bg-neutral-900 p-2 rounded-xl hover:bg-neutral-300" onClick={close}>
                    <FontAwesomeIcon icon={faX} className="text-neutral-500" />
                </span>
            </div>
        </div>
    )
}

export default Reciept;