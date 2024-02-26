"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";

const Login = () => {
    const router = useRouter();
    const { setAuthStatus } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const session = await appwriteService.login(formData);

            if (session) {
                setAuthStatus(true);
                router.push("/profile");
            }
        } catch (error: any) {
            setError(error);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Login Page</h1>
        </div>
    );
};
