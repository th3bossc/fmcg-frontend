"use client";

import { ChangeEvent, MouseEvent, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { UserDetails } from "@/types";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<UserDetails>({
        name: "",
        role: "RETAILER",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }

        })
    }

    const handleSelect = (e: MouseEvent<HTMLElement>, value: "RETAILER" | "DISTRIBUTOR") => {
        setFormData((prev) => {
            return {
                ...prev,
                role: value
            }
        })
    }

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <div className="w-full">
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-3xl"> Sign Up </h1>
                <span className="font-regular text-sm mt-2 text-neutral-600"> Enter your details to get started </span>
            </div>
            <form className="flex flex-col items-center justify-center mt-8">
                <ToggleButtonGroup
                    color="primary"
                    value={formData.role}
                    exclusive
                    onChange={handleSelect}
                    className="w-96 h-10 rounded-md p-2 mt-4 flex items-center justify-center"
                    size="small"
                >
                    <ToggleButton value="RETAILER" className="border-0 bg-transparent"> Retailer </ToggleButton>
                    <ToggleButton value="DISTRIBUTOR"> Distributor </ToggleButton>
                </ToggleButtonGroup>
                <input
                    type="text"
                    placeholder="Full name"
                    className="placeholder-neutral-600 text-sm w-96 h-10 border-2 border-gray-800 rounded-md p-2 bg-neutral-900 mt-4"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="placeholder-neutral-600 text-sm w-96 h-10 border-2 border-gray-800 rounded-md p-2 bg-neutral-900 mt-4"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Username"
                    className="placeholder-neutral-600 text-sm w-96 h-10 border-2 border-gray-800 rounded-md p-2 mt-4 bg-neutral-900"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="placeholder-neutral-600 text-sm w-96 h-10 border-2 border-gray-800 rounded-md p-2 mt-4 bg-neutral-900"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="placeholder-neutral-600 text-sm w-96 h-10 border-2 border-gray-800 rounded-md p-2 mt-4 bg-neutral-900"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <button type="button" className="w-96 h-10 p-1 mt-4 bg-red-900 hover:bg-red-300 hover:text-black" onClick={handleSubmit}> Login </button>
            </form>
            <div className="w-full text-center text-xs mt-4"> Already have an account? <button onClick={() => router.push("/login")} className="pointer text-red-200"> Log In </button></div>
        </div>
    )
}

export default Login;