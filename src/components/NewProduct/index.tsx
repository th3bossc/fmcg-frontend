import { Product } from "@/types";
import { useState } from "react";
import { createProduct } from "@/lib/general";

const NewProduct = ({
    closeHandler
}: {
    closeHandler: () => void
}) => {
    const [formData, setFormData] = useState<Omit<Product, 'id'>>({
        name: "",
        category: "",
        brand: "",
        price: 0,
        priority: 0,
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
        if (formData.demand === 0 || formData.priority === 0) {
            alert("Please enter a valid demand and priority")
            return;
        }
        try {
            await createProduct(formData);
            closeHandler();
        }
        catch (err) {
            console.error(err);
        }
    }


    return (
        <div className="w-[600px] h-[600px] bg-neutral-800 rounded-lg relative">
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
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Product Name"
                    className="w-96 h-10 border-2 border-gray-800 rounded-md p-2 mt-4 bg-neutral-900"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    placeholder="Product Category"
                    className="w-96 h-10 border-2 border-gray-800 rounded-md p-2 mt-4 bg-neutral-900"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    placeholder="Product Brand"
                    className="w-96 h-10 border-2 border-gray-800 rounded-md p-2 mt-4 bg-neutral-900"
                    onChange={handleChange}
                />
                <div className="mt-5">
                    <span className="text-neutral-600"> Enter the price and priority for the product </span>
                </div>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    placeholder="Price"
                    className="w-96 h-10 border-2 border-gray-800 rounded-md p-2 mt-4 bg-neutral-900"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="priority"
                    value={formData.priority}
                    placeholder="Product Priority"
                    className="w-96 h-10 border-2 border-gray-800 rounded-md p-2 mt-4 bg-neutral-900"
                    onChange={handleChange}
                />
                <button type="submit" className="w-96 h-10 p-1 mt-4 bg-red-900 hover:bg-red-300 hover:text-black"> Submit </button>
            </form>
        </div>
    )
}

export default NewProduct;