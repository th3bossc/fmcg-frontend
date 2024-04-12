"use client";

import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { loginUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/AuthContext";

const Login = () => {
    const { logIn, isLoggedIn } = useAuthContext();
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }

        })
    }

    const handleSubmit = async () => {
        console.log(formData);
        try {
            const { access } = await loginUser(formData.email, formData.password);
            logIn(access);
            router.push("/dashboard");
        }
        catch (err) {
            console.error(err);
        }
    }

    if (isLoggedIn)
        router.push("/dashboard");


    return (
        <div className="w-full">
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-3xl"> Login </h1>
                <span className="font-regular text-sm mt-2 text-neutral-600"> Enter your credentials </span>
            </div>
            <form className="flex flex-col items-center justify-center mt-8">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-96 h-10 border-2 border-gray-800 rounded-md p-2 bg-neutral-900"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-96 h-10 border-2 border-gray-800 rounded-md p-2 mt-4 bg-neutral-900"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="button" className="w-96 h-10 p-1 mt-4 bg-red-900 hover:bg-red-300 hover:text-black" onClick={handleSubmit}> Login </button>
            </form>
            <div className="w-full text-center text-xs mt-4"> Don&apos;t have an account? <Link href="/register" className="pointer text-red-200"> Sign Up </Link></div>
        </div>
    )
}

export default Login;