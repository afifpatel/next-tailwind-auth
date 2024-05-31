import React, { useState } from "react";
import Client_RegisterForm from "@/app/(auth)/register/client_RegisterForm";
import Link from "next/link";

function Page() {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
          <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
              <h1 className="font-semibold text-2xl text text-center">Register</h1>
                <Client_RegisterForm />
              <p className="text-center">
                  Already registered?{' '}
                  <Link className="text-indigo-500 hover:underline" href="/login">
                      Login
                  </Link>{' '}
              </p>
          </div>
      </div>
  );
}

export default Page;