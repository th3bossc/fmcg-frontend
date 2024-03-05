import { recieptData } from "@/dummyData";
import { Button } from "@mui/material";

const InventoryTracker = () => {
    return (
        <div className="w-full h-screen flex flex-col gap-4 justify-center items-center p-8">
            <div className="flex justify-between items-center w-full">
                <h1 className="font-bold text-3xl">Inventory Tracker</h1>
                <Button variant="outlined"> Add Product </Button>
            </div>
            <hr className="w-full" />
            <div className="w-full mt-4 h-full">
                <h1 className="font-semibold mb-4 text-xl text-center"> Order receipts </h1>
                <div className="h-full w-full flex gap-2 flex-col">
                    {
                        recieptData.map((item, index) => (
                            <div key={index} className="flex justify-between items-center w-full p-4 border border-1 border-neutral-600 gap-2">
                                <span className="font-regular w-48"> <strong>Product:</strong> {item.product.name} </span>
                                <span className="font-regular w-48"> <strong>Retailer:</strong> {item.retailerName} </span>
                                <span className="font-regular w-48"> <strong>Brand:</strong> {item.product.brand}</span>
                                <span className="font-regular w-48"> <strong>Demand:</strong> {item.product.demand} </span>
                                <div>
                                    <p className={`text-white rounded-lg w-32 p-2 text-center capitalize ${item.status === "accept" ? "bg-green-900" : "bg-red-900"}`}> {item.status}ed </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default InventoryTracker;