"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";

const Signup = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    });

    const [error, setError] = useState("");

    const { setAuthStatus } = useAuth();

    const create = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userData = await appwriteService.createUserAccount(formData);

            if (userData) {
                setAuthStatus(true);
                router.push("/profile");
            }
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Signup Page</h1>
        </div>
    );
};

export default Signup;
