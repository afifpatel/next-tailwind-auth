'use client'
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";

function ClientLoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e:FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const result = signIn("credentials", {
                username,
                password,
                callbackUrl: "/"
            });
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-12 w-full sm:w-[400px]">
            <div className="grid w-full items-center gap-1.5">
                <Label>Username:</Label>
                <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label>Password:</Label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div >
            <div className="text-center">
                <Button type="submit">Login</Button>
            </div>
            </form>
        </div>
    );
}

export default ClientLoginForm;