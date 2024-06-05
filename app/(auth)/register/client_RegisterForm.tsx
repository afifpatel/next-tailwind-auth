'use client'
import cognitoRegister from "@/app/utils/cognitoRegister";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import React, { FormEvent, useState } from "react";

function ClientRegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [familyName, setFamilyName] = useState("");

    const handleSubmit = async (e:FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const registerData = {
            username,
            password,
            familyName
        }
        try {
           const result = await cognitoRegister(registerData);
           console.log(result);
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
            <div className="grid w-full items-center gap-1.5">
                <Label>Family Name:</Label>
                <Input type="text" value={familyName} onChange={(e) => setFamilyName(e.target.value)} />
            </div >
            <div className="text-center">
                <Button type="submit">Register</Button>
            </div>
            </form>
        </div>
    );
}

export default ClientRegisterForm;